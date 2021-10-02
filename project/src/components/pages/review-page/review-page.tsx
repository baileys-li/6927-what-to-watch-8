import PromoFilm from '../../promo-film/promo-film';

import type MovieType from '../../../types/movie-type';

type ReviewPageType = {
  promo: MovieType;
};

function ReviewPage({ promo }: ReviewPageType): JSX.Element {
  return <PromoFilm movie={promo} review />;
}

export default ReviewPage;
