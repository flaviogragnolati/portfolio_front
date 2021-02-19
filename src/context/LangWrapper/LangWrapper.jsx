import React from 'react';
import { LangContext } from './langContext';
import useLang from './useLang';

function LangWrapper({ children }) {
  const langCtxValue = useLang();

  return (
    <LangContext.Provider value={langCtxValue}>{children}</LangContext.Provider>
  );
}
export default LangWrapper;
