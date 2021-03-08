import React from 'react';

//Import Icons for cards
import { Handshake, Glasses } from 'styled-icons/fa-solid';
import { Factory } from 'styled-icons/boxicons-solid';
import { Team } from 'styled-icons/remix-fill';
import { Brain } from 'styled-icons/boxicons-regular';
import { ChatAlt2 } from 'styled-icons/heroicons-solid';

import { defaults } from 'utils/config';

const {
  aboutCards: { team, learn, work, communication, problem, responsible },
} = defaults;

function Icon({ icon, ...props }) {
  switch (icon) {
    case team:
      return <Team {...props} />;
    case learn:
      return <Glasses {...props} />;
    case work:
      return <Factory {...props} />;
    case communication:
      return <ChatAlt2 {...props} />;
    case problem:
      return <Brain {...props} />;
    case responsible:
      return <Handshake {...props} />;
    default:
      break;
  }

  return <></>;
}

export default Icon;
