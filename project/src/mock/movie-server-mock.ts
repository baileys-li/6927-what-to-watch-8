import faker from 'faker';
import { ServerResponseMovieType } from '../types/movie-type';

export default function generateServerMovieMock(): ServerResponseMovieType {
  return {
    id: faker.datatype.number(),
    rating: faker.datatype.float(1),

    name: faker.random.words(4),
    description: faker.lorem.paragraph(3),


    director: faker.name.findName(),
    starring: [faker.name.findName(), faker.name.findName(), faker.name.findName(), faker.name.findName()],
    genre: faker.random.word(),
    released: 2000,
    'poster_image': faker.random.image(),
    'preview_image': faker.random.image(),
    'background_image': faker.random.image(),
    'background_color': '#fff',
    'video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'preview_video_link': faker.random.image(),
    'scores_count': faker.datatype.number(200),
    'run_time': faker.datatype.number(200),
    'is_favorite': faker.datatype.boolean(),
  };
}
