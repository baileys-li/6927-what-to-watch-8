import PromoFilm from '../../promo-film/promo-film';

import type PromoFilmType from '../../../types/promo-film-type';

type ReviewPageType = {
  promo: PromoFilmType;
};

function ReviewPage({ promo }: ReviewPageType): JSX.Element {
  return <PromoFilm movie={promo} review />;
}

export default ReviewPage;
