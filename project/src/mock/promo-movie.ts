import type MovieType from '../types/movie-type';

const PROMO: MovieType = {
  id: 1,
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/the-grand-budapest-hotel.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://some-link',
  previewVideoLink: 'https://some-link',
  description: [
    `In the 1930s, the Grand Budapest Hotel is a popular European
  ski resort, presided over by concierge Gustave H. (Ralph
  Fiennes). Zero, a junior lobby boy, becomes Gustave's friend
  and protege.`,
    `Gustave prides himself on providing first-class service to the
  hotel's guests, including satisfying the sexual needs of the
  many elderly women who stay there. When one of Gustave's
  lovers dies mysteriously, Gustave finds himself the recipient
  of a priceless painting and the chief suspect in her murder.`,
  ],
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Anderson',
  starring: [
    'Bill Murray',
    'Edward Norton',
    'Jude Law',
    'Willem Dafoe',
    'Saoirse Ronan',
  ],
  runTime: 99,
  genre: 'Comedy',
  released: 2014,
  isFavorite: false,
};

export default PROMO;
