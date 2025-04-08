import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "./routes.jsx";
import {AuthContext} from "../context/index.js";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    return (<>
            {isAuth ? <Routes>
                {privateRoutes.map(r => <Route {...r} key={r.path}/>)}
            </Routes> : <Routes>
                {publicRoutes.map(r => <Route {...r} key={r.path}/>)}
            </Routes>}
        </>);
};

export default AppRouter;