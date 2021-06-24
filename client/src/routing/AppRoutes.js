import React from 'react';
import { Switch, Route } from "react-router-dom";
import UsersTable from "../pages/UsersTable/UsersTable";
import MainPage from "../pages/MainPage/MainPage";
import UserDataPage from "../pages/UserDataPage/UserDataPage";

const AppRoutes = () => {
    return (
        <Switch>
            <Route component={MainPage} path={'/'} exact/>
            <Route component={UsersTable} path={'/user_statics'} exact/>
            <Route component={UserDataPage} path={'/user_statics/:id'}/>
        </Switch>
    );
};

export default AppRoutes;