import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";

export default combineReducers({
  sampleData: sampleReducer,
});
