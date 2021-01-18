import React, {Fragment} from "react";
import {Router} from "@reach/router"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavBar from "./components/common/NavBar/NavBar";
import About from "./pages/About";
import "./App.css";

const App = () => {
    return (
        <Fragment>
            <NavBar/>
            <Router>
                <Home path="/"/>
                <About path="/about"/>
                <Contact path="/contact"/>
            </Router>
        </Fragment>
    );
}

export default App;