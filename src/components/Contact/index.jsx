import React, { useState, useEffect } from "react";
import Inputs from "./Inputs";

export default function Contacts() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [CPF, setCPF] = useState("");
    const [disableButton, setDisableButton] = useState(true);

    useEffect(() => {
        if (email !== "" && CPF !== "" && name !== "" && lastName !== "") {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [email, CPF, name, lastName, disableButton]);

    const inputsArray = [
        {
            setVariable: setName,
            variableString: { name: "Name", nome: "Nome" },
            variableType: "text",
        },
        {
            setVariable: setLastName,
            variableString: { name: "lastName", nome: "Sobrenome" },
            variableType: "text",
        },
        {
            setVariable: setCPF,
            variableString: { name: "CPF", nome: "CPF" },
            variableType: "number",
        },
        {
            setVariable: setEmail,
            variableString: { name: "email", nome: "email" },
            variableFunction: () => {},
            variableType: "email",
        },
    ];

    return (
        <form
            onSubmit={(event) => {
                console.log([name, lastName, email, CPF]);
            }}
        >
            {inputsArray.map((parameter, i) => (
                <Inputs
                    key={parameter.variableType + i}
                    setVariable={parameter.setVariable}
                    variableString={parameter.variableString}
                    variableFunction={parameter.variableFunction}
                    variableError={parameter.variableError}
                    variableType={parameter.variableType}
                />
            ))}

            <button disabled={disableButton}>Finalizar</button>
        </form>
    );
}
