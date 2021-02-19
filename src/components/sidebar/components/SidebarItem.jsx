import React, { forwardRef } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  MenuItem,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import ForumIcon from '@material-ui/icons/Forum';
import { defaults } from 'utils/config';

function SidebarItem(
  { item, idx, current, setCurrent, iconProps, ...rest },
  ref
) {
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

  const handleClick = (event) => {
    const section = event.currentTarget.getAttribute('section');
    console.log('SECTION', section);
    if (sections.includes(section)) {
      setCurrent(section);
      console.log('REF', ref);
      ref.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <ListItem
      button
      onClick={handleClick}
      selected={current === id}
      section={id}
      {...rest}
    >
      <ListItemIcon>
        <Icon {...iconProps} fontSize="small" />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

export default forwardRef(SidebarItem);
