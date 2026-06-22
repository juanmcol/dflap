import { combineReducers } from "@reduxjs/toolkit"
import displayReducer from '../features/display/displaySlice';
import textInputReducer from '../features/textInput/textInputSlice';

// not sure how big this project will get,
// so I want to create a rootReducer and learn new concepts.
export const rootReducer = combineReducers({
  display: displayReducer,
  textInput: textInputReducer
});