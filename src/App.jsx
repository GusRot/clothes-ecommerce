import "./styles/global.scss";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import { ListContextProvider } from "./ListContext";

function App() {
    return (
        <BrowserRouter>
            <ListContextProvider>
                <Header />
                <Router />
                <Footer />
            </ListContextProvider>
        </BrowserRouter>
    );
}

export default App;
