const aboutModalReducer = (state = false, action) => {
  switch (action.type) {
    case 'DISPLAY':
      return (state = action.status);
    default:
      return state;
  }
};

export default aboutModalReducer;
