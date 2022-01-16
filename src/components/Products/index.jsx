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
    const [categories, setCategories] = useState([]);
    const [newCategories, setNewCategories] = useState([]);
    const [colorFilter, setColorFilter] = useState("");
    const { page } = useParams();

    useEffect(() => {
        api.get(`categories/${items}`).then((response) =>
            setCategories(response.data)
        );

        setNewCategories(categories.items);
    }, [items]);

    function filterCategories(filter) {
        return filter === categories.items.sku;
    }

    function handleColorFilter(filter) {
        setColorFilter(filter);
    }

    useEffect(() => {
        if (colorFilter) {
            setNewCategories(
                categories.items.filter(filterCategories(colorFilter))
            );
        } else {
            setNewCategories(categories.items);
        }
    }, [colorFilter, categories]);

    return (
        <div className="products">
            <div className="products-path">
                <PathHistory category={title} />
            </div>

            <div className="products-container">
                <div className="products-container-filter">
                    <Filter
                        filters={categories.filters}
                        filter={colorFilter}
                        functionFilter={handleColorFilter}
                    />
                </div>

                <div className="products-container-products">
                    <ProductsHeader title={title} />
                    <div className="products-container-products-grid">
                        <Card products={newCategories} />
                        <Card products={newCategories} />
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
