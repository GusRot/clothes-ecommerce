import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
    return (
        <div>
            <br />
            <br />
            <h1>Ops... Página não existe</h1>
            <br />
            <br />
            <Link to="/">
                <button>Voltar para página principal</button>
            </Link>
        </div>
    );
}
