export default function Usuario() {
    const nomeUsuario = [
        { imagem: "assets/img/catanacomics.svg", arroba: "catanacomics", nome: "Catana"}
    ]

    return (
        <div class="usuario">
            <img src= {nomeUsuario.map((i) => i.imagem)}/>
            <div class="texto">
                <strong>{nomeUsuario.map((a) => a.arroba)}</strong>
                <span>
                    {nomeUsuario.map((n) => n.nome)}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}