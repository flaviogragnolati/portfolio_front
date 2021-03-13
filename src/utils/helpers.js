export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const fakeRequest = () => {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
};
