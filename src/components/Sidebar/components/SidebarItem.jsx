import React, { forwardRef, useEffect, useRef } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import ForumIcon from '@material-ui/icons/Forum';
import { defaults } from 'utils/config';

function SidebarItem({
  item,
  currentSection,
  setCurrentSection,
  spy,
  ...rest
}) {
  const { text, icon, id } = item;
  const { sections } = defaults;
  let Icon;
  switch (icon) {
    case 'home':
      Icon = HomeIcon;
      break;
    case 'about':
      Icon = PersonIcon;
      break;
    case 'services':
      Icon = InfoIcon;
      break;
    case 'projects':
      Icon = WorkIcon;
      break;
    case 'contact':
      Icon = ForumIcon;
      break;
    default:
      break;
  }

  const listItemRef = useRef(null);

  useEffect(() => {
    if (spy.inView) {
      setCurrentSection({ type: 'set', payload: item.id });
    }
  }, [spy, setCurrentSection, item.id]);

  // useEffect(() => {
  //   if (inView) {
  //     console.log('USEFFECT', inView, item.id, current);
  //     setCurrent(item.id);
  //   }
  // }, [inView, setCurrent, item.id]);

  const handleClick = (event) => {
    const section = event.currentTarget.getAttribute('section');
    if (sections.includes(section)) {
      const refSection = document.getElementById(section);
      // setCurrent(section);
      setCurrentSection({ type: 'set', payload: section });
      listItemRef.current.blur();
      refSection.scrollIntoView({
        behavior: 'smooth',
      });
      // ref.current.scrollIntoView({
      //   behavior: 'smooth',
      // });
    }
  };

  return (
    <ListItem
      ref={listItemRef}
      button
      onClick={handleClick}
      selected={currentSection === id}
      section={id}
      {...rest}
    >
      <ListItemIcon>
        <Icon fontSize="small" />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

export default React.memo(SidebarItem);
