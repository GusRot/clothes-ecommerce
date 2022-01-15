import "./styles/global.scss";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
