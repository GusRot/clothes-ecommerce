import React, { useContext } from "react";
import { ListContext } from "../../../ListContext";
import { Link } from "react-router-dom";

export default function Filter({ filters = [{}], functionFilter = () => {} }) {
    const { items } = useContext(ListContext);

    return (
        <>
            {console.log(filters)}
            <h3>Filtre por</h3>
            <h4>Categorias</h4>

            <ul>
                {items.map((item) => (
                    <Link key={item.id + 111} to={`${item.path}/1`}>
                        <li>
                            <span>{item.name}</span>
                        </li>
                    </Link>
                ))}
            </ul>

            {filters[0].color ? (
                <>
                    <h4>{filters[0].color}</h4>
                    <ul className="colors">
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                </>
            ) : (
                ""
            )}

            {filters[0].gender ? (
                <>
                    <h4>{filters[0].gender}</h4>
                    <ul>
                        <li>
                            <span>sapatos</span>
                        </li>
                        <li>
                            <span>sapatos</span>
                        </li>
                        <li>
                            <span>sapatos</span>
                        </li>
                    </ul>
                </>
            ) : (
                ""
            )}
        </>
    );
}
