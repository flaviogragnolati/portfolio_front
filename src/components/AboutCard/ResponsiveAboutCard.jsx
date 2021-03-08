import React from 'react';

import MobileAboutCard from './components/MobileAboutCard';
import DesktopAboutCard from './components/DesktopAboutCard';
import Icon from './components/Icon';
import useScreenSize from 'utils/useScreenSize';

function ResponsiveAboutCard(props) {
  const [mobile, tablet, desktop] = useScreenSize();

  let aboutCard;

  if (desktop) {
    aboutCard = <DesktopAboutCard {...props} />;
  } else if (mobile || tablet) {
    aboutCard = <MobileAboutCard {...props} />;
  }
  return <>{aboutCard}</>;
}

export default ResponsiveAboutCard;
