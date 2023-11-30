import React, {Fragment, useEffect, useState, useContext} from "react";
import {Outlet} from 'react-router-dom';
import Header from "./Header";
import Loader from "./Loader";
import Menu from "./Menu";
import { AuthContext } from "./AuthProvider";
import MobileHeader from "./MobileHeader";

function Layout() {
    const {isLoading} = useContext(AuthContext);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollpos = window.scrollY;
            const headerHeight = document.body.querySelector('.header-wrapper').offsetHeight;
            if (scrollpos >= headerHeight) {
                document.body.querySelector('.menu').classList.add('menu_fixed')
            }

            if (scrollpos < headerHeight) {
                document.body.querySelector('.menu').classList.remove('menu_fixed')
            }
        })
    }, []) 


    return (
        <Fragment>
            <Header />
            <Menu />
            <MobileHeader />
            <div className="container">
                
                {isLoading ? <Loader /> : <Outlet />}
            </div>
        </Fragment>

    )
}

export default Layout;
