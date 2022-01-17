import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({ activePage, path }) {
    const pages = [1, 2, 3, 4, 5];
    const pageLength = pages.length;
    return (
        <>
            <Link
                to={
                    Number(activePage) !== pages[0]
                        ? `/${path}/${Number(activePage) - 1}`
                        : ""
                }
            >
                <span>{"<"}</span>
            </Link>
            {pages.map((page) => (
                <Link key={page} to={`/${path}/${page}`}>
                    <span
                        className={
                            Number(activePage) === Number(page)
                                ? "active-page"
                                : ""
                        }
                    >
                        {page}
                    </span>
                </Link>
            ))}
            <Link
                to={
                    Number(activePage) !== pages[pageLength - 1]
                        ? `/${path}/${Number(activePage) + 1}`
                        : ""
                }
            >
                <span>{">"}</span>
            </Link>
        </>
    );
}
