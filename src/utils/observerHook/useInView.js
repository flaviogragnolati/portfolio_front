import React, { useCallback, useEffect, useRef, useState } from 'react';
import { observe } from './helpers';

//*ported from react-intersection-observer
const useInView = ({
  threshold,
  delay,
  trackVisibility,
  rootMargin,
  root,
  triggerOnce,
  skip,
  initialInView,
} = {}) => {
  const unobserve = useRef();
  const nodeRef = useRef(); //custom added
  const [state, setState] = useState({
    inView: !!initialInView,
  });
  const setRef = useCallback(
    (node) => {
      if (unobserve.current !== undefined) {
        unobserve.current();
        unobserve.current = undefined;
      } // Skip creating the observer

      if (skip) return;

      if (node) {
        nodeRef.current = node; //custom added to save the node ref itself
        unobserve.current = observe(
          node,
          (inView, entry) => {
            setState({
              inView,
              entry,
            });

            if (entry.isIntersecting && triggerOnce && unobserve.current) {
              // If it should only trigger once, unobserve the element after it's inView
              unobserve.current();
              unobserve.current = undefined;
            }
          },
          {
            root,
            rootMargin,
            threshold,
            // @ts-ignore
            trackVisibility,
            // @ts-ignore
            delay,
          }
        );
      }
    }, // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string so it won't change between renders.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Array.isArray(threshold) ? threshold.toString() : threshold,
      root,
      rootMargin,
      triggerOnce,
      skip,
      trackVisibility,
      delay,
    ]
  );
  /* eslint-disable-next-line */

  useEffect(() => {
    if (!unobserve.current && state.entry && !triggerOnce && !skip) {
      // If we don't have a ref, then reset the state (unless the hook is set to only `triggerOnce` or `skip`)
      // This ensures we correctly reflect the current state - If you aren't observing anything, then nothing is inView
      setState({
        inView: !!initialInView,
      });
    }
  });
  const result = [setRef, state.inView, state.entry, nodeRef]; // Support object destructuring, by adding the specific values.
  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  result.nodeRef = result[3]; //custom added to avoid reinventing the wheel and reusing the logic
  return result;
};
export default useInView;
