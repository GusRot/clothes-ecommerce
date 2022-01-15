import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Page404 from "../Page404";
import Products from "../Products";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
