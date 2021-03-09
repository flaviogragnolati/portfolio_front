import { useMediaQuery } from '@material-ui/core';

const useScreenSize = () => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const tablet = {};
  tablet.all = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
  tablet.low = useMediaQuery('(max-width:1279px)');
  tablet.high = useMediaQuery('(min-width:1280px)');
  const desktop = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return [mobile, tablet, desktop];
};

export default useScreenSize;
