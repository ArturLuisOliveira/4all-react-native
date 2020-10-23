import Comment from '@models/comment';

interface TaskInterface {
    id: string;
    cidade: string;
    bairro: string;
    urlFoto: string;
    urlLogo: string;
    titulo: string;
    telefone: string;
    texto: string;
    endereco: string;
    latitude: string;
    longitude: string;
    comentarios: Comment[];
}

class Task {
    id: string;
    cidade: string;
    bairro: string;
    urlFoto: string;
    urlLogo: string;
    titulo: string;
    telefone: string;
    texto: string;
    endereco: string;
    latitude: string;
    longitude: string;
    comentarios: Comment[];

    constructor({
        id,
        cidade,
        bairro,
        urlFoto,
        urlLogo,
        titulo,
        telefone,
        texto,
        endereco,
        latitude,
        longitude,
        comentarios
    }: TaskInterface) {
        this.id = id;
        this.cidade = cidade;
        this.bairro = bairro;
        this.urlFoto = urlFoto;
        this.urlLogo = urlLogo;
        this.titulo = titulo;
        this.telefone = telefone;
        this.texto = texto;
        this.endereco = endereco;
        this.latitude = latitude;
        this.longitude = longitude;
        this.comentarios = comentarios;
    }
}
export default Task;
