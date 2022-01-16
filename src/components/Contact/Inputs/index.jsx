import React from "react";

export default function Inputs({
    setVariable,
    variableString,
    variableType,
    require = true,
}) {
    return (
        <input
            onChange={(event) => {
                setVariable(event.target.value);
            }}
            id={variableString.name}
            type={variableType}
            placeholder={variableString.nome}
            required={require ? true : false}
        />
    );
}
