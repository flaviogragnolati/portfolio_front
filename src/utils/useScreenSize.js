import { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
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

  // const screens = [mobile, tablet, desktop, windowDimensions];
  const screens = {
    mobile,
    tablet,
    desktop,
    size: windowDimensions,
  };
  // const prevScreens = usePrevious(screens);
  // useEffectWhen(
  //   () => {
  //     console.log('USE EFFECT', isEqual(prevScreens, screens));
  //     if (!isEqual(prevScreens, screens)) {
  //       console.log('screens', screens);
  //       console.log('getting', getWindowDimensions());
  //       setWindowDimensions(getWindowDimensions());
  //     }
  //   },
  //   [],
  //   [screens]
  // );

  // screens['mobile'] = screens[0];
  // screens['tablet'] = screens[1];
  // screens['desktop'] = screens[2];
  // screens['size'] = windowDimensions;

  return screens;
};

export default useScreenSize;
