import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes.jsx";

const AppRouter = () => {
    return (
        <Routes>
            {routes. map(r => <Route {...r}  key={r.path} />  )}
        </Routes>
    );
};

export default AppRouter;