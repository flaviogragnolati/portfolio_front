import { useMediaQuery } from '@material-ui/core';

const useScreenSize = () => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const tablet = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const desktop = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return [mobile, tablet, desktop];
};

export default useScreenSize;
