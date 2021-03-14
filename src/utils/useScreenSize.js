import { useCallback, useEffect, useRef, useState } from 'react';
import isEqual from 'lodash.isequal';
import { useMediaQuery } from '@material-ui/core';
import useWindowDimensions from './useWindowDimensions';
import useEffectWhen from './useEffectWhen';
import usePrevious from './usePrevious';
import { getWindowDimensions, resizeDelta } from 'utils/helpers';

const useScreenSize = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const tablet = {};
  tablet.all = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
  tablet.low = useMediaQuery((theme) => theme.breakpoints.only('sm'));
  tablet.high = useMediaQuery((theme) => theme.breakpoints.only('md'));

  const desktop = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const screens = [mobile, tablet, desktop, windowDimensions];
  const prevScreens = usePrevious(screens);

  screens['mobile'] = screens[0];
  screens['tablet'] = screens[1];
  screens['desktop'] = screens[2];
  screens['size'] = windowDimensions;

  useEffectWhen(
    () => {
      if (!isEqual(prevScreens, screens)) {
        setWindowDimensions(getWindowDimensions());
      }
    },
    [],
    [screens]
  );

  return screens;
};

export default useScreenSize;
