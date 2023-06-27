import { combineReducers } from "redux";
import testReducer from "./testReducer";

const rootReducer = combineReducers({
  counter: testReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
