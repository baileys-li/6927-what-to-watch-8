import Footer from '../../footer/footer';
import PromoFilm from '../../promo-film/promo-film';
import Catalog from '../../catalog/catalog';

import SmallFilmCardType from '../../../types/small-fim-card-type';
import type PromoFilmType from '../../../types/promo-film-type';

type MainPageType = {
  promo: PromoFilmType;
  list: Array<SmallFilmCardType>;
};

function MoviePage({ list, promo }: MainPageType): JSX.Element {
  return (
    <>
      <PromoFilm movie={promo} full />
      <div className='page-content'>
        <Catalog list={list} similar />
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
