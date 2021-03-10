import { useMediaQuery } from '@material-ui/core';

const useScreenSize = () => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const tablet = {};
  tablet.all = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
  tablet.low = useMediaQuery((theme) => theme.breakpoints.only('sm'));
  tablet.high = useMediaQuery((theme) => theme.breakpoints.only('md'));

  const desktop = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return [mobile, tablet, desktop];
};

export default useScreenSize;
