import React, { useContext, useState } from "react";
import "./style.scss";
import logo from "../../assets/webjump-logo.png";
import { ListContext } from "../../ListContext";
import { Link } from "react-router-dom";

export default function Header() {
    const { items, setSearch, disabledButton, setDisabledButton } =
        useContext(ListContext);
    const [searchText, setSearchText] = useState("");

    return (
        <div className="header-container">
            <div className="header-container-account">
                <div className="header-container-account-content">
                    <Link to="/home">Acesse sua conta</Link>
                    <span>ou</span>
                    <Link to="/home">Cadastre-se</Link>
                </div>
            </div>

            <div className="header-container-webjump">
                <div className="header-container-webjump-content">
                    <img src={logo} alt="logo" />
                    <div>
                        <input
                            className={disabledButton ? "input-disabled" : ""}
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            id="search"
                            type="text"
                        />
                        <button
                            disabled={disabledButton}
                            onClick={(e) => {
                                setSearch(searchText);
                                setSearchText("");
                            }}
                        >
                            Buscar
                        </button>
                    </div>
                </div>
            </div>

            <div className="header-container-nav">
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
                        <Link key={item.path} to={`${item.path}/1`}>
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
        </div>
    );
}
