import React, { createRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

function Subtitle() {
  const writeHere = createRef();

  useEffect(() => {
    if (writeHere.current) {
      const typewriter = new Typewriter(writeHere.current, {
        loop: true,
        delay: 75,
      });
      typewriter
        .pauseFor(200)
        .typeString('TESTING, TESGING...')
        .pauseFor(300)
        .deleteChars(11)
        .typeString('RUN NUJMBER 2')
        .pauseFor(500)
        .start();
    }
  }, [writeHere]);
  return <div ref={writeHere}>{/* <p id="writeHere"></p> */}</div>;
}

export default Subtitle;
