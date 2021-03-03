import React, { createRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

function Subtitle({ type }) {
  const writeHere = createRef();

  useEffect(() => {
    if (writeHere.current) {
      const typewriter = new Typewriter(writeHere.current, {
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
        .pauseFor(300)
        .deleteChars(type[2].length)
        .typeString(type[3])
        .pauseFor(500)
        .start();
    }
  }, [writeHere, type]);

  return <div ref={writeHere}></div>;
}

export default Subtitle;
