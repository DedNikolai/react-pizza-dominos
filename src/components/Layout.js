import React, {Fragment, useEffect, useState, useContext} from "react";
import {Outlet} from 'react-router-dom';
import Header from "./Header";
import Loader from "./Loader";
import Menu from "./Menu";
import { AuthContext } from "./AuthProvider";

function Layout() {
    const {isLoading} = useContext(AuthContext);

    return (
        <Fragment>
            <Header />
            <div className="container">
                <Menu />
                {isLoading ? <Loader /> : <Outlet />}
            </div>
        </Fragment>

    )
}

export default Layout;
