import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import MobileProjectCard from './components/MobileProjectCard';
import TabletProjectCard from './components/TabletProjectCard';
import DesktopProjectCard from './components/DesktopProjectCard';

function ResponsiveProjectCard({ project }) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const tablet = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const desktop = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  let card;
  if (mobile) {
    card = <MobileProjectCard project={project} />;
  } else if (tablet) {
    card = <TabletProjectCard project={project} />;
  } else if (desktop) {
    card = <DesktopProjectCard project={project} />;
  }
  return <>{card}</>;
}

export default ResponsiveProjectCard;
