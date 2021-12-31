import * as React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/Home';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Navigate replace to="/home" />}></Route>
            <Route path={"/home"} element={<Home />}></Route>
        </Routes>
    )
};

export default AppRoutes;