import React from 'react';
import { defaults } from 'utils/config';
import useInView from './useInView';

const useSpy = () => {
  let spyItems = {};
  let nodeRefs = {};

  // Loop trough all sections that need to be observed
  defaults.sections.forEach((section) => {
    spyItems[section] = {};
    nodeRefs[section] = {};
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [ref, inView, entry, nodeRef] = useInView({
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
      initialInView: section === 'home' && true,
    });
    // add to compound object all observables, nodeRefs and setRefs
    nodeRefs[section] = nodeRef;
    spyItems[section].ref = ref;
    spyItems[section].inView = inView;
    spyItems[section].entry = entry;
  });

  const result = [spyItems, nodeRefs];
  result.spyItems = result[0];
  result.nodeRefs = result[1];

  return result;
};

export default useSpy;
