import React from "react";

export default function ProductsHeader({ title }) {
    return (
        <>
            <h2>{title}</h2>
            <div className="horizontal-line"></div>
            <div className="products-container-products-order">
                <div>
                    <span>"a"</span>
                    <span>a</span>
                </div>
                <div>
                    <span>Ordenar por</span>
                    <select>
                        <option value=""> </option>
                        <option value="preço">preço</option>
                    </select>
                </div>
            </div>
        </>
    );
}
