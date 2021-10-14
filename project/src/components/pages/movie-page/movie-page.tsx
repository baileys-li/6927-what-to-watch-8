import Footer from '../../footer/footer';
import PromoFilm from '../../promo-film/promo-film';
import Catalog from '../../catalog/catalog';

import type SmallFilmCardType from '../../../types/small-fim-card-type';

type MainPageType = {
  list: Array<SmallFilmCardType>;
};

function MoviePage({ list }: MainPageType): JSX.Element {

  return (
    <>
      <PromoFilm full />
      <div className='page-content'>
        <Catalog list={list} similar />
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
