import React from "react"

export default function Usuario() {
    const [nome, setNome] = React.useState("")
    const [foto, setFoto] = React.useState("assets/img/catanacomics.svg")

    function inserirNome() {
        const nomePrompt = prompt("Qual é o seu nome?")
        setNome(nomePrompt)
    }

    function inserirFoto() {
        const fotoPrompt = prompt("Insira o link da sua foto aqui")
        setFoto(fotoPrompt)
    }


    return (
        <div class="usuario">
            <button onClick={inserirFoto}><img src={foto} /></button>
            <div class="texto">
                <strong>{(nome === "" || nome === null) ? "" : `@${nome}`}</strong>
                <span>
                    {(nome === "" || nome === null) ? "Por gentileza, seu nome" : `${nome}`}
                    <ion-icon onClick={inserirNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}