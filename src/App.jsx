import './App.css'
import AppRouter from "./routes/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./components/Navigation.jsx";

function App() {


    return (
        <BrowserRouter >
            <div className="container">
            <Navigation />
            <AppRouter />
            </div>
        </BrowserRouter>
    )
}

export default App
