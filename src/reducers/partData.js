import data from '../resources/exampleData';

const partReducer = (state = data, action) => {
  switch (action.type) {
    case 'SET':
      return (state = action.payload);
    default:
      return state;
  }
};

export default partReducer;
