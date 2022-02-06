import React, { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import "./style.scss";
import PathHistory from "./PathHistory";
import Filter from "./Filter";
import ProductsHeader from "./ProductsHeader";
import Card from "./Card";
import Pagination from "./Pagination";
import { useParams } from "react-router-dom";
import { ListContext } from "../../ListContext";

export default function Products({ items, title, path }) {
    const [categories, setCategories] = useState({});
    const [newCategories, setNewCategories] = useState([]);
    const [newFilter, setNewFilter] = useState("");
    const [newOrder, setNewOrder] = useState("");
    const [availableColorFilters, setAvailableColorFilters] = useState([]);
    const [availableGenderFilters, setAvailableGenderFilters] = useState([]);
    const { page } = useParams();
    const { search, setSearch, setDisabledButton } = useContext(ListContext);

    useEffect(() => {
        resetParams();

        api.get(`categories/${items}`).then((response) =>
            setCategories(response.data)
        );

        setNewCategories(categories.items);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);

    useEffect(() => {
        if (newFilter || newOrder) {
            checkForActiveFilters();
        } else {
            setNewCategories(categories.items);
        }

        if (search) {
            checkForSearchFilter();
        }

        if (Object.values(categories).length) {
            checkForFilter();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newFilter, categories, newOrder, search]);

    function handleFilter(filter) {
        if (String(filter) === String(newFilter)) {
            setNewFilter("");
        } else {
            setNewFilter(filter);
        }
    }

    function handleOrder(e) {
        setNewOrder(e.target.value);
    }

    function resetParams() {
        setAvailableGenderFilters([]);
        setAvailableColorFilters([]);
        setNewFilter("");
        setNewOrder("");
        setSearch("");
        setDisabledButton(false);
    }

    function checkForActiveFilters() {
        if (newOrder && newFilter) {
            if (newOrder === "price") {
                setNewCategories(
                    categories.items
                        .filter(filterFunction)
                        .sort(sortPriceFunction)
                );
            } else {
                setNewCategories(
                    categories.items
                        .filter(filterFunction)
                        .sort(sortAlphaFunction)
                );
            }
        } else if (newFilter) {
            setNewCategories(categories.items.filter(filterFunction));
        } else if (newOrder) {
            if (newOrder === "price") {
                setNewCategories(categories.items.sort(sortPriceFunction));
            } else {
                setNewCategories(categories.items.sort(sortAlphaFunction));
            }
        }

        function filterFunction(value) {
            return (
                (value.filter[0].color || value.filter[0].gender) === newFilter
            );
        }
        function sortPriceFunction(a, b) {
            if (Number(a.price) < Number(b.price)) return -1;
        }
        function sortAlphaFunction(a, b) {
            if (a.name < b.name) return -1;
        }
    }

    function checkForSearchFilter() {
        setNewCategories(newCategories.filter(filterSearchFunction));
        function filterSearchFunction(value) {
            return value.name.toUpperCase().includes(search.toUpperCase());
        }
    }

    function checkForFilter() {
        if (categories.items[0].filter[0].color) {
            const arr = [];
            categories.items.map((item) => arr.push(item.filter[0].color));
            const uniq = [...new Set(arr)];
            setAvailableColorFilters([...uniq]);
        }

        if (categories.items[0].filter[0].gender) {
            const arr = [];
            categories.items.map((item) => arr.push(item.filter[0].gender));
            const uniq = [...new Set(arr)];
            setAvailableGenderFilters([...uniq]);
        }
    }

    return (
        <div className="products">
            <div className="products-path">
                <PathHistory category={title} />
            </div>

            <div className="products-container">
                <div className="products-container-filter">
                    <Filter
                        filters={categories.filters}
                        filter={newFilter}
                        availableFilters={{
                            color: availableColorFilters,
                            gender: availableGenderFilters,
                        }}
                        functionFilter={handleFilter}
                        path={path}
                    />
                </div>

                <div className="products-container-products">
                    <ProductsHeader
                        value={newOrder}
                        order={handleOrder}
                        title={title}
                    />
                    <div className="products-container-products-grid">
                        <Card products={newCategories} />
                    </div>
                    <div className="products-container-products-pagination">
                        <Pagination path={path} activePage={page} />
                    </div>
                </div>
            </div>
        </div>
    );
}
