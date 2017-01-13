import projects from "./projects";
import { combineReducers } from "redux";

const trsReducer = combineReducers(
    {
        projects
    }
);
export default trsReducer;

// function trsReducer(state = {}, action) {
//   return projects(state, action);
// }
// export default trsReducer;
