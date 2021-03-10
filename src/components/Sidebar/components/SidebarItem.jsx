import React, { forwardRef, useEffect, useRef } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import ForumIcon from '@material-ui/icons/Forum';
import { defaults } from 'utils/config';

function SidebarItem({ item, current, setCurrent, spy, ...rest }, ref) {
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
    if (spy[item.id].inView) {
      setCurrent(item.id);
    }
  }, [spy, item.id, setCurrent]);

  const handleClick = (event) => {
    const section = event.currentTarget.getAttribute('section');
    if (sections.includes(section)) {
      setCurrent(section);
      listItemRef.current.blur();
      ref.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <ListItem
      ref={listItemRef}
      button
      onClick={handleClick}
      selected={current === id}
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

export default forwardRef(SidebarItem);
