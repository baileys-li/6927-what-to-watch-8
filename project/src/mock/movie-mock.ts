import faker from 'faker';
import MovieType from '../types/movie-type';

export default function generateMockMovie(): MovieType {
  return {
    id: faker.datatype.number(),
    rating: faker.datatype.float(1),
    posterImage: faker.random.image(),
    name: faker.random.words(4),
    description: faker.lorem.paragraph(3),


    director: faker.name.findName(),
    starring: [faker.name.findName(), faker.name.findName(), faker.name.findName(), faker.name.findName()],
    genre: faker.random.word(),
    released: 2000,
    previewImage: faker.random.image(),
    backgroundImage: faker.random.image(),
    backgroundColor: '#fff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    scoresCount: faker.datatype.number(200),
    runTime: faker.datatype.number(200),
    isFavorite: faker.datatype.boolean(),
  };
}
