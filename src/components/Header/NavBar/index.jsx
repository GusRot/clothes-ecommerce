import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ items, setDisabledButton, mobile }) {
    return (
        <div
            className={
                mobile
                    ? "header-container-nav mobile"
                    : "header-container-nav pc"
            }
        >
            <div className="header-container-nav-content">
                <Link
                    onClick={() => {
                        setDisabledButton(true);
                    }}
                    to="/home"
                >
                    <h4>Página Inicial</h4>
                </Link>
                {items.map((item) => (
                    <Link key={item.path} to={`/${item.path}/1`}>
                        <h4>{item.name}</h4>
                    </Link>
                ))}
                <Link
                    onClick={() => {
                        setDisabledButton(true);
                    }}
                    to="/contato"
                >
                    <h4>Contato</h4>
                </Link>
            </div>
        </div>
    );
}
