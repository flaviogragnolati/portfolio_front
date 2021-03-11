import { createRef, useEffect, useReducer } from 'react';
import { defaults } from 'assets/config';
const { sections } = defaults;

const refs = sections.reduce((refsObj, section) => {
  refsObj[section] = createRef();
  return refsObj;
}, {});

const useIntersectionObserver = (
  refs,
  section,
  currentSection,
  setCurrentSection
) => {
  const [state, dispatch] = useReducer();
  useEffect(() => {
    const observerConfig = {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id !== currentSection && entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observerConfig
    );
    observer.observe(refs[section].current);
    return () => observer.disconnect();
  }, [currentSection, setCurrentSection, refs, section]);

  return [state, dispatch];
};

export default useIntersectionObserver;
