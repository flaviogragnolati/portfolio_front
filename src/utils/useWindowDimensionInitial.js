import { useEffect, useState } from 'react';
import isEqual from 'lodash.isequal';

import usePrevious from './usePrevious';
import { getWindowDimensions } from 'utils/helpers';
import useScreenSize from './useScreenSize';

const useWindowDimensionsInitial = () => {
  const [size, setSize] = useState(getWindowDimensions());

  const screens = useScreenSize();

  const prevScreens = usePrevious(screens);

  useEffect(() => {
    if (!isEqual(prevScreens, screens)) {
      setSize(getWindowDimensions());
    }
  }, [screens, prevScreens]);

  return size;
};

export default useWindowDimensionsInitial;
