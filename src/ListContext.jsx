import React, { createContext, useState, useEffect } from "react";
import { api } from "./services/api";

export const ListContext = createContext([]);

export function ListContextProvider({ children }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        api.get(`categories/list`).then((response) => {
            setItems(response.data.items);
        });
    }, []);

    return (
        <ListContext.Provider value={{ items }}>
            {children}
        </ListContext.Provider>
    );
}
