import { combineReducers } from "redux";

import LoginReducer from "./login"
import HomeReducer from "./home"
import NavigationReducer from "./navigation"

const AppReducer = combineReducers({
    LoginReducer,
    HomeReducer,
    NavigationReducer
  });
  
export default AppReducer;
  