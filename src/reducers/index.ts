import { combineReducers } from 'redux';
import music from './music';

const rootReducer = combineReducers({
  music,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
