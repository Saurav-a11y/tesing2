import { combineReducers } from "redux";
import profileDataReducer from "./ProfileDataList/profileDataReducer";

const rootReducer = combineReducers({
  profileData: profileDataReducer,
});

export default rootReducer;
