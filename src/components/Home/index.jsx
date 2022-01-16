import React from "react";
import "./style.scss";
import { items } from "../../services/list";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-container">
            <aside className="home-container-nav">
                <ul>
                    <Link to="/home">
                        <li>Página Inicial</li>
                    </Link>
                    {items.items.map((item) => (
                        <Link to={`/${item.path}`}>
                            <li>{item.name}</li>
                        </Link>
                    ))}
                    <Link to="/contato">
                        <li>Contato</li>
                    </Link>
                </ul>
            </aside>

            <div className="home-container-flex">
                <div className="home-container-flex-banner"></div>
                <div className="home-container-flex-content">
                    <h1>Seja bem-vindo!</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Odit, reprehenderit inventore culpa, labore omnis
                        aliquid reiciendis officia in fugit architecto
                        consectetur doloribus! Soluta autem quidem suscipit
                        aliquid quas non unde! em, ipsum dolor sit amet
                        consectetur adipis icing elit. Odit, reprehenderit
                        inventore culpa, labore omnis aliquid reiciendis officia
                        in fugit architecto consectetur doloribus! Soluta autem
                        quidem s em, ipsum dolor sit amet consectetur
                        adipisicing elit. Odit, reprehenderit inventore culpa,
                        labore omnis aliquid reiciendis officia in fugit
                        architecto consectetur doloribus! Soluta autem quidem s
                        ciendis officia in fugit architecto consectetur
                        doloribus! Soluta autem quidem s em, ips
                    </p>
                </div>
            </div>
        </div>
    );
}
