import React from "react";
import "./style.scss";
import logo from "../../assets/webjump-logo.png";
import { items } from "../../services/list";

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-container-account">
                <div className="header-container-account-content">
                    <a href="https://github.com/GusRot">Acesse sua conta</a>
                    <span>ou</span>
                    <a href="https://github.com/GusRot">Cadastre-se</a>
                </div>
            </div>

            <div className="header-container-webjump">
                <div className="header-container-webjump-content">
                    <img src={logo} alt="logo" />
                    <div>
                        <input type="text" />
                        <button>Buscar</button>
                    </div>
                </div>
            </div>

            <div className="header-container-nav">
                <div className="header-container-nav-content">
                    <h4>Página Inicial</h4>
                    {items.items.map((item) => (
                        <h4>{item.name}</h4>
                    ))}
                    <h4>Contato</h4>
                </div>
            </div>
        </div>
    );
}
