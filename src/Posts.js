import Post from "./Post"

export default function Posts() {
    const listaPosts = [
        { imagem: "assets/img/meowed.svg", nome: "meowed", conteudo: "assets/img/gato-telefone.svg", imagemCurtida: "assets/img/respondeai.svg", nomeCurtida: "respondeai", numCurtidas: 102 },
        { imagem: "assets/img/barked.svg", nome: "barked", conteudo: "assets/img/dog.svg", imagemCurtida: "assets/img/adorable_animals.svg", nomeCurtida: "adorable_animals", numCurtidas: 99}
    ]

    return (
        <div class="posts">
            {listaPosts.map((p) => <Post imagem={p.imagem} nome={p.nome} conteudo={p.conteudo} imagemCurtida={p.imagemCurtida} nomeCurtida={p.nomeCurtida} numCurtidas={p.numCurtidas} />)}
        </div>
    )
}