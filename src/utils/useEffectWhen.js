import { useEffect, useRef } from 'react';

const useEffectWhen = (effect, deps, whenDeps) => {
  const whenRef = useRef(whenDeps || []);
  const initial = whenRef.current === whenDeps;
  const whenDepsChanged =
    initial || !whenRef.current.every((w, i) => w === whenDeps[i]);
  whenRef.current = whenDeps;
  const nullDeps = deps.map(() => null);

  return useEffect(
    whenDepsChanged ? effect : () => {},
    whenDepsChanged ? deps : nullDeps
  );
};

export default useEffectWhen;
