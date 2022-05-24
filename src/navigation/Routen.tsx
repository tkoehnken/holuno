import React, {lazy} from 'react';
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {Home} from "pages";
import {LazyLoad} from "../componets";
const NotFound = lazy(()=>import('pages/NotFound/NotFound'));
const Test = lazy(()=>import('pages/Test/Test'));

const Links = () => {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route path={'/'} element={<Home/>}/>
            {process.env.NODE_ENV === 'development' && <Route path={'/test'} element={<LazyLoad><Test/></LazyLoad>}/>}
            <Route path={'*'} element={<LazyLoad><NotFound/></LazyLoad>}/>
        </Routes>
    )
}

const Routen = () => (
    <BrowserRouter>
        <Links/>
    </BrowserRouter>
)
export default Routen;
