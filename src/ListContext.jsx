import React, { createContext, useState, useEffect } from "react";
import { api } from "./services/api";

export const ListContext = createContext([]);

export function ListContextProvider({ children }) {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [disabledButton, setDisabledButton] = useState(true);

    useEffect(() => {
        api.get(`categories/list`).then((response) => {
            setItems(response.data.items);
        });
    }, []);

    return (
        <ListContext.Provider
            value={{
                items,
                search,
                setSearch,
                disabledButton,
                setDisabledButton,
            }}
        >
            {children}
        </ListContext.Provider>
    );
}
