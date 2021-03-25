import React from 'react';
import MobileProjectCard from './components/MobileProjectCard';
import TabletProjectCard from './components/TabletProjectCard';
import DesktopProjectCard from './components/DesktopProjectCard';
import useScreenSize from 'utils/useScreenSize';

function ResponsiveProjectCard({ project }) {
  let card;
  const { mobile, tablet, desktop } = useScreenSize();

  if (mobile) {
    card = <MobileProjectCard project={project} />;
  } else if (tablet.all) {
    card = <TabletProjectCard project={project} />;
  } else {
    card = <DesktopProjectCard project={project} />;
  }
  return <>{card}</>;
}

export default ResponsiveProjectCard;
