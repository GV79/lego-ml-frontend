import { combineReducers } from 'redux';
import aboutModalReducer from './aboutModal';
import partReducer from './partData';

const rootReducer = combineReducers({
  aboutModal: aboutModalReducer,
  part: partReducer,
});

export default rootReducer;
