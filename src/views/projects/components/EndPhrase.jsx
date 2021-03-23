import React, { useRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';

const EndPhraseDiv = styled.div`
  margin: 1rem 0;
  height: 10vh;
  text-align: center;
`;

function EndPhrase({ text, intersectionObserverProps, ...props }) {
  const typeRef = useRef();

  useEffect(() => {
    if (typeRef.current) {
      const typewriter = new Typewriter(typeRef.current, {
        loop: false,
        delay: 75,
      });
      typewriter.pauseFor(200).typeString(text).pauseFor(500).start();
    }
  }, [typeRef, text]);

  return <EndPhraseDiv ref={typeRef}>{text} </EndPhraseDiv>;
}

export default EndPhrase;
