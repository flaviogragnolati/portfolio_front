import { useMediaQuery } from '@material-ui/core';
import { defaults } from 'utils/config';

const useScreenSize = () => {
  const { screens } = defaults;
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const tablet = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const desktop = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  // let screen;
  // if (mobile) screen = screens.mobile;
  // else if (tablet) screen = screens.tablet;
  // else if (desktop) screen = screens.desktop;
  // return screen;
  return [mobile, tablet, desktop];
};

export default useScreenSize;
