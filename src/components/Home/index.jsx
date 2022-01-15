import React from "react";
import "./style.scss";
import { items } from "../../services/list";

export default function Home() {
    return (
        <div className="home-container">
            <aside className="home-container-nav">
                <ul>
                    <li>Página Inicial</li>
                    {items.items.map((item) => (
                        <li>{item.name}</li>
                    ))}
                    <li>Contato</li>
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
