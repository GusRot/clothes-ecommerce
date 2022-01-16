import React from "react";
import { Link } from "react-router-dom";

export default function PathHistory({ category }) {
    return (
        <>
            <Link className="link" to="home">
                Página Inicial
            </Link>
            <span>{">"}</span>
            <Link className="link active" to="">
                {category}
            </Link>
        </>
    );
}
