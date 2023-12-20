import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Tracker from "../pages/Tracker";
import Registration from "../pages/Registration"
import Pizza from "../pages/Pizza";
import NotFound from "../pages/NotFound"
import RequireAuth from "./RequireAuth";
import Profile from "../pages/Profile";
import News from "../pages/News";
import Order from "../pages/Order";

function Router() {
    return (
        <Routes>
            <Route path="/" element={ <Layout/> }>
                <Route index element={ <Home/> } />
                <Route path="tracker" element={ <Tracker/> } />
                <Route path="news" element={ <News/> } />
                <Route path="order" element={ <Order/> } />
                <Route path="registration" element={ <Registration/> } />
                <Route path="pizza" element={<Pizza />} />
                <Route path="profile" 
                    element={ <RequireAuth><Profile/></RequireAuth>} 
                />
                <Route path="*" element={ <NotFound/> } />
            </Route>    
        </Routes>
    )
}

export default Router;