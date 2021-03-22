import { combineReducers } from "redux";
import Reducer from "./reducer";
const rootReducer = combineReducers({
  auth: Reducer
});
export default rootReducer;
