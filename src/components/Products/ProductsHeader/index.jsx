import React from "react";

export default function ProductsHeader({ title, order }) {
    return (
        <>
            <h2>{title}</h2>
            <div className="horizontal-line"></div>
            <div className="products-container-products-order">
                <div>
                    <span>Ordenar por</span>
                    <select onChange={(e) => order(e)}>
                        <option value=""> </option>
                        <option value="price">preço</option>
                        <option value="alfa">alfabetica</option>
                    </select>
                </div>
            </div>
        </>
    );
}
