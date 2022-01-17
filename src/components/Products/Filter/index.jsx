import React, { useContext } from "react";
import { ListContext } from "../../../ListContext";
import { Link } from "react-router-dom";

export default function Filter({
    filters = [{}],
    functionFilter,
    availableFilters,
    filter,
    path,
}) {
    const { items } = useContext(ListContext);

    return (
        <>
            <h3>Filtre por</h3>
            <h4>Categorias</h4>

            <ul>
                {items.map((item) => (
                    <Link
                        className={path === item.path ? "category-active" : ""}
                        key={item.id + 111}
                        to={`/${item.path}/1`}
                    >
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
                        {availableFilters.color.map((color, index) => (
                            <li
                                key={`${color}${index}`}
                                className={`${color} ${
                                    filter === color ? "color-selected" : ""
                                }`}
                                onClick={() => functionFilter(color)}
                            ></li>
                        ))}
                    </ul>
                </>
            ) : (
                ""
            )}

            {filters[0].gender ? (
                <>
                    <h4>{filters[0].gender}</h4>
                    <ul>
                        {availableFilters.gender.map((gender, index) => (
                            <li
                                className={
                                    gender === filter ? "gender-active" : ""
                                }
                                key={`${gender}${index}`}
                                onClick={() => functionFilter(gender)}
                            >
                                {gender}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                ""
            )}
        </>
    );
}
