import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ListContext } from "../../ListContext";
import Home from "../Home";
import Page404 from "../Page404";
import Products from "../Products";

export default function Router() {
    const { items } = useContext(ListContext);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {items.map((item) => (
                <Route
                    key={item.name}
                    path={`/${item.path}/:page`}
                    element={<Products title={item.name} items={item.id} />}
                />
            ))}
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
