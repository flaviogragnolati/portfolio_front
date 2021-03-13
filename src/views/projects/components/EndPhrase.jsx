import React, { createRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import styled from 'styled-components';

const EndPhraseDiv = styled.div`
  /* height: 15vh; */
  text-align: center;
`;

function EndPhrase({ text, ...props }) {
  const typeRef = createRef();

  useEffect(() => {
    if (typeRef.current) {
      const typewriter = new Typewriter(typeRef.current, {
        loop: false,
        delay: 75,
      });
      typewriter
        .pauseFor(200)
        .typeString(text)
        // .pauseFor(300)
        // .deleteChars(text.length)
        .pauseFor(500)
        .start();
    }
  }, [typeRef, text]);

  return <EndPhraseDiv ref={typeRef}>{text} </EndPhraseDiv>;
}

export default EndPhrase;
