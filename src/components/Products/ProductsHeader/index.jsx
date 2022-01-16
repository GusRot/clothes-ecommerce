import React from "react";

export default function ProductsHeader() {
    return (
        <>
            <h2>Title</h2>
            <div className="horizontal-line"></div>
            <div className="products-container-products-order">
                <div>
                    <span>a</span>
                    <span>b</span>
                </div>
                <div>
                    <span>Ordenar por</span>
                    <select>
                        <option value="a">a</option>
                        <option value="b">b</option>
                    </select>
                </div>
            </div>
        </>
    );
}
