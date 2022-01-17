import React from "react";
import { Link } from "react-router-dom";

export default function Card({ products = [] }) {
    return (
        <>
            {products.map((product) => (
                <div key={product.image}>
                    <div>
                        <img src={product.image} alt="" />
                    </div>
                    <h6>{product.name}</h6>
                    <div>
                        <h5
                            className={
                                product.specialPrice ? "active-price" : ""
                            }
                        >
                            {product.specialPrice
                                ? `R$
                            ${String(product.price.toFixed(2)).replace(
                                ".",
                                ","
                            )}`
                                : ""}
                        </h5>
                        <h5>
                            R$
                            {product.specialPrice
                                ? String(
                                      product.specialPrice.toFixed(2)
                                  ).replace(".", ",")
                                : String(product.price.toFixed(2)).replace(
                                      ".",
                                      ","
                                  )}
                        </h5>
                    </div>
                    <Link to={product.path}>
                        <button>Comprar</button>
                    </Link>
                </div>
            ))}
        </>
    );
}
