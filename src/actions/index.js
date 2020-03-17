export const display = status => {
  return {
    type: 'DISPLAY',
    status,
  };
};

export const set = payload => {
  return {
    type: 'SET',
    payload,
  };
};
