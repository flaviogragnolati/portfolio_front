import { useCallback, useEffect, useRef, useState } from 'react';
import isEqual from 'lodash.isequal';
import { useMediaQuery } from '@material-ui/core';
import useWindowDimensions from './useWindowDimensions';
import useEffectWhen from './useEffectWhen';
import usePrevious from './usePrevious';
import { getWindowDimensions, resizeDelta } from 'utils/helpers';
import useScreenSize from './useScreenSize';

const useWindowDimensionsInitial = () => {
  const [size, setSize] = useState(getWindowDimensions());

  const screens = useScreenSize();
  //   console.log('SIZE IN HOOL', size, screens);
  const prevScreens = usePrevious(screens);
  //   useEffectWhen(
  //     () => {
  //       console.log('USE EFFECT', isEqual(prevScreens, screens));
  //       if (!isEqual(prevScreens, screens)) {
  //         console.log('screens', screens);
  //         console.log('getting', getWindowDimensions());
  //         setSize(getWindowDimensions());
  //       }
  //     },
  //     [],
  //     [screens]
  //   );
  useEffect(() => {
    if (!isEqual(prevScreens, screens)) {
      setSize(getWindowDimensions());
    }
  }, [screens, prevScreens]);

  return size;
};

export default useWindowDimensionsInitial;
