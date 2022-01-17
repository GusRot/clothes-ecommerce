import React, { useContext, useState } from "react";
import "./style.scss";
import logo from "../../assets/webjump-logo.png";
import { ListContext } from "../../ListContext";
import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import NavBar from "./NavBar";

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
                    <Link to="/menu">
                        <CgDetailsMore className="react-icons" />
                    </Link>
                    <img src={logo} alt="logo" />
                    <FaShoppingCart className="react-icons" />
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

            <NavBar
                mobile={false}
                items={items}
                setDisabledButton={setDisabledButton}
            />
        </div>
    );
}
