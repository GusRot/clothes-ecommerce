import React, { useState, useEffect } from "react";
import Inputs from "./Inputs";
import "./style.scss";

export default function Contacts() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [CPF, setCPF] = useState("");
    const [text, setText] = useState("");
    const [disableButton, setDisableButton] = useState(true);

    useEffect(() => {
        if (
            email !== "" &&
            CPF !== "" &&
            name !== "" &&
            lastName !== "" &&
            text !== ""
        ) {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [email, CPF, name, lastName, disableButton, text]);

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
            variableType: "email",
        },
    ];

    return (
        <form
            className="container-forms"
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <p>Nos diga o motivo do contato que responderemos ao seu e-mail</p>

            {inputsArray.map((parameter, i) => (
                <Inputs
                    key={parameter.variableType + i}
                    setVariable={parameter.setVariable}
                    variableString={parameter.variableString}
                    variableType={parameter.variableType}
                />
            ))}

            <textarea
                id="text"
                type="text"
                required={true}
                onChange={(e) => setText(e.target.value)}
                placeholder="Com o que podemos lhe ajudar"
            ></textarea>

            <button disabled={disableButton}>Enviar</button>
        </form>
    );
}
