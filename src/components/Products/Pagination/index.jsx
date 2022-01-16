import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({ activePage }) {
    const pages = [1, 2, 3, 4, 5];
    const pageLength = pages.length;
    return (
        <>
            <Link
                to={
                    activePage != pages[0]
                        ? `/products/${Number(activePage) - 1}`
                        : ""
                }
            >
                <span>{"<"}</span>
            </Link>
            {pages.map((page) => (
                <Link key={page} to={`/products/${page}`}>
                    <span className={activePage == page ? "active-page" : ""}>
                        {page}
                    </span>
                </Link>
            ))}
            <Link
                to={
                    activePage != pages[pageLength - 1]
                        ? `/products/${Number(activePage) + 1}`
                        : ""
                }
            >
                <span>{">"}</span>
            </Link>
        </>
    );
}
