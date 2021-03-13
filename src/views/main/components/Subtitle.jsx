import { Box } from '@material-ui/core';
import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect/dist/core';

const SubtitleDiv = styled.div`
  height: 15vh;
  text-align: center;
`;

function Subtitle({ type }) {
  const typeRef = createRef();

  useEffect(() => {
    if (typeRef.current) {
      const typewriter = new Typewriter(typeRef.current, {
        loop: true,
        delay: 75,
      });
      typewriter
        .pauseFor(200)
        .typeString(type[0])
        .pauseFor(300)
        .typeString(type[1])
        .pauseFor(300)
        .deleteChars(type[1].length)
        .typeString(type[2])
        .pauseFor(500)
        .start();
    }
  }, [typeRef, type]);

  return <SubtitleDiv ref={typeRef}></SubtitleDiv>;
}

export default Subtitle;
