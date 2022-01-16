import React from "react";
import "./style.scss";
import PathHistory from "./PathHistory";
import Filter from "./Filter";
import ProductsHeader from "./ProductsHeader";
import Card from "./Card";

export default function Products() {
    return (
        <div className="products">
            <div className="products-path">
                <PathHistory />
            </div>

            <div className="products-container">
                <div className="products-container-filter">
                    <Filter />
                </div>

                <div className="products-container-products">
                    <ProductsHeader />
                    <div className="products-container-products-grid">
                        <Card />
                    </div>
                    <div className="products-container-products-pagination"></div>
                </div>
            </div>
        </div>
    );
}
