import newsSlice from './newsSlice';
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  newsSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
