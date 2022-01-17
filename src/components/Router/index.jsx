import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ListContext } from "../../ListContext";
import Contacts from "../Contact";
import NavBar from "../Header/NavBar";
import Home from "../Home";
import Page404 from "../Page404";
import Products from "../Products";

export default function Router() {
    const { items, setDisabledButton } = useContext(ListContext);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {items.map((item) => (
                <Route
                    key={item.name}
                    path={`/${item.path}/:page`}
                    element={
                        <Products
                            path={item.path}
                            title={item.name}
                            items={item.id}
                        />
                    }
                />
            ))}
            <Route path="/contato" element={<Contacts />} />
            <Route
                path="/menu"
                element={
                    <NavBar
                        mobile={true}
                        items={items}
                        setDisabledButton={setDisabledButton}
                    />
                }
            />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
