import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "3rem",
                gap: "1rem",
            }}
        >
            <br />
            <br />
            <h1>Ops... Página não existe</h1>
            <br />
            <br />
            <Link to="/">
                <button
                    style={{
                        color: "white",
                        backgroundColor: "#cb0d1f",
                        border: "1px solid #cb0d1f",
                        height: "2.75rem",
                        width: "9.75rem",
                        cursor: "pointer",
                        fontSize: "1rem",
                        letterSpacing: "-0.8px",
                        fontWeight: "600",
                    }}
                >
                    Voltar para página principal
                </button>
            </Link>
        </div>
    );
}
