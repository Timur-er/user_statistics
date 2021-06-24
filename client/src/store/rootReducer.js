import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer/usersReducer";
import {dateReducer} from "./dateReducer/dateReducer";
import {userReducer} from "./userReducer/userReducer";
import {paginationReducer} from "./paginationReducer/paginationReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer,
    date: dateReducer,
    pagination: paginationReducer
})