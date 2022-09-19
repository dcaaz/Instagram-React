import react from "react"
import React from "react"

export default function Post(props) {
    //const [curtida, setCurtida] = React.useState(`${props.numCurtidas}`)
    const [name, setName] = React.useState("bookmark-outline")
    const [curtida, setCurtida] = React.useState("heart-outline")
    const [cor, setCor] = React.useState("")
    const [curtidas, setCurtidas] = React.useState(props.numCurtidas)

    function salvarPost(){
        if(name === "bookmark"){
            setName("bookmark-outline")
        } else {
            setName("bookmark")
        }
    }

    function curtir(){

        if (curtida === "heart"){   
            setCurtida("heart-outline")
            setCor("")
            setCurtidas(props.numCurtidas)
        } else {
            setCurtida("heart")
            setCor("red")
            setCurtidas(props.numCurtidas + 1)
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagem} alt={"Foto do usuário"} />
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
               <img src= {props.conteudo} alt={"Imagem que o usuário publicou"} onClick={curtir}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={curtir} class={cor} name={curtida}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                       <ion-icon onClick={salvarPost} name={name}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imagemCurtida} alt={"Imagem que do usuário que curtiu a publicação"}/>
                    <div class="texto">
                        Curtido por <strong>{props.nomeCurtida}</strong> e <strong> outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}