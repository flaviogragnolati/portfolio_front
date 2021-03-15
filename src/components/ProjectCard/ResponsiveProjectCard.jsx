import React from 'react';
import MobileProjectCard from './components/MobileProjectCard';
import TabletProjectCard from './components/TabletProjectCard';
import DesktopProjectCard from './components/DesktopProjectCard';
import useScreenSize from 'utils/useScreenSize';

function ResponsiveProjectCard({ project, screenType }) {
  let card;
  const { mobile, tablet, desktop } = useScreenSize();

  if (mobile) {
    card = <MobileProjectCard project={project} screenType={screenType} />;
  } else if (tablet.all) {
    card = <TabletProjectCard project={project} screenType={screenType} />;
  } else {
    card = <DesktopProjectCard project={project} screenType={screenType} />;
  }
  return <>{card}</>;
}

export default ResponsiveProjectCard;
