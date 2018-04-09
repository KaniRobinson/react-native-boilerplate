import { combineReducers } from "redux";
import { reducer } from "redux-form";

import blankReducer from "@containers/BlankPageContainer/src/reducer";

export default combineReducers({
  form: reducer,
  blankReducer
});
