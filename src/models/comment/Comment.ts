interface CommentInterface {
    urlFoto: string;
    nome: string;
    nota: number;
    titulo: string;
    comentario: string;
}

class Comment {
    urlFoto: string;
    nome: string;
    nota: number;
    titulo: string;
    comentario: string;
    constructor({ urlFoto, nome, nota, titulo, comentario }: CommentInterface) {
        this.urlFoto = urlFoto;
        this.nome = nome;
        this.nota = nota;
        this.titulo = titulo;
        this.comentario = comentario;
    }
}

export default Comment;
