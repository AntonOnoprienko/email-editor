import './App.css'
import AppRouter from "./routes/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import {AuthContext} from "./context/index.js";
import {useState} from "react";

function App() {
    const [isAuth, setIsAuth] = useState(() => {
        return localStorage.getItem('auth') === 'true';
    });


    return (
        <AuthContext.Provider value={{ isAuth,
            setIsAuth
        }}>
        <BrowserRouter >


            <div className="container">
            <Navigation />
            <AppRouter />
            </div>

        </BrowserRouter>
            </AuthContext.Provider>
    )
}

export default App
