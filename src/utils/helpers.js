export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const fakeRequest = () => {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
};

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

// const diffProp = (a, b) => Math.abs(b - a) / a;

// export const resizeDelta = (
//   oldSize = { width: 0, height: 0 },
//   newSize,
//   delta
// ) => {
//   const { width: oldW, height: oldH } = oldSize;
//   const { width: newW, height: newH } = newSize;

//   if (diffProp(oldW, newW) > delta || diffProp(oldH, newH) > delta) return true;
//   else return false;
// };
