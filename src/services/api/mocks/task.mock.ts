import * as faker from 'faker';
import Task from '@models/task';
import Comment from '@models/comment';
import mockComment from './comment.mock';

interface TaskMockDTO {
    id?: string;
    cidade?: string;
    bairro?: string;
    urlFoto?: string;
    urlLogo?: string;
    titulo?: string;
    telefone?: string;
    texto?: string;
    endereco?: string;
    latitude?: string;
    longitude?: string;
    comentarios?: Comment[];
}

const task = (data: TaskMockDTO = {}): Task =>
    new Task({
        bairro: faker.address.streetName(),
        cidade: faker.address.city(),
        comentarios: new Array(5).fill(null).map(() => mockComment()),
        endereco: faker.address.direction(),
        id: faker.random.uuid(),
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
        telefone: faker.phone.phoneNumber(),
        texto: faker.lorem.sentence(),
        titulo: faker.lorem.words(3),
        urlFoto: faker.image.city(),
        urlLogo: faker.image.image(),
        ...data
    });

export default task;
