const logError = () => {
  console.warn(
    'Your browser does not allow using local storage. Some settings will not be persisted between sessions.'
  );
};

export const getItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    logError();
    return null;
  }
};

export const setItem = (key, item) => {
  try {
    localStorage.setItem(key, item);
  } catch (error) {
    logError();
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    logError();
  }
};
