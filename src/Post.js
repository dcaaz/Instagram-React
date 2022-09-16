export default function Post(props) {
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
                <img src= {props.conteudo} alt={"Imagem que o usuário publicou"}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imagemCurtida} alt={"Imagem que do usuário que curtiu a publicação"}/>
                    <div class="texto">
                        Curtido por <strong>{props.nomeCurtida}</strong> e <strong>{props.numCurtidas}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}