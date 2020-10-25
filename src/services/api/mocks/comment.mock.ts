import Comment from '@models/comment';
import * as faker from 'faker';

interface CommentMockDTO {
    urlFoto?: string;
    nome?: string;
    nota?: number;
    titulo?: string;
    comentario?: string;
}
const comment = (data: CommentMockDTO = {}): Comment =>
    new Comment({
        comentario: faker.lorem.sentence(),
        nome: faker.name.firstName() + ' ' + faker.name.lastName(),
        nota: faker.random.number({ max: 5, min: 0 }),
        titulo: faker.lorem.words(2),
        urlFoto: faker.image.avatar(),
        ...data
    });

export default comment;
