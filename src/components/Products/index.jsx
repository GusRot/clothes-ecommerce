import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import "./style.scss";
import PathHistory from "./PathHistory";
import Filter from "./Filter";
import ProductsHeader from "./ProductsHeader";
import Card from "./Card";
import Pagination from "./Pagination";
import { useParams } from "react-router-dom";

export default function Products({ items, title }) {
    const [categories, setCategories] = useState({});
    const [newCategories, setNewCategories] = useState([]);
    const [newFilter, setNewFilter] = useState("");
    const [newOrder, setNewOrder] = useState("");
    const [availableColorFilters, setAvailableColorFilters] = useState([]);
    const [availableGenderFilters, setAvailableGenderFilters] = useState([]);
    const { page } = useParams();

    useEffect(() => {
        setAvailableGenderFilters([]);
        setAvailableColorFilters([]);
        setNewFilter("");
        setNewOrder("");
        api.get(`categories/${items}`).then((response) =>
            setCategories(response.data)
        );

        setNewCategories(categories.items);
    }, [items]);

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

    useEffect(() => {
        if (newFilter) {
            setNewCategories(categories.items.filter(filterFunction));

            function filterFunction(value) {
                return (
                    (value.filter[0].color || value.filter[0].gender) ===
                    newFilter
                );
            }
        } else {
            setNewCategories(categories.items);
        }

        if (Object.values(categories).length) {
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
    }, [newFilter, categories]);

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
                    />
                </div>

                <div className="products-container-products">
                    <ProductsHeader order={handleOrder} title={title} />
                    <div className="products-container-products-grid">
                        <Card products={newCategories} />
                    </div>
                    <div className="products-container-products-pagination">
                        <Pagination activePage={page} />
                    </div>
                </div>
            </div>
        </div>
    );
}
