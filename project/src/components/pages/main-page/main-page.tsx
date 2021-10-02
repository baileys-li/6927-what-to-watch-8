import Footer from '../../footer/footer';
import PromoFilm from '../../promo-film/promo-film';
import Catalog from '../../catalog/catalog';

import type CatalogType from '../../../types/catalog-type';
import type MovieType from '../../../types/movie-type';

type MainPageType = {
  promo: MovieType;
  catalog: CatalogType;
};

function MainPage({ catalog, promo }: MainPageType): JSX.Element {
  return (
    <>
      <PromoFilm movie={promo} />
      <div className='page-content'>
        <Catalog list={catalog.list} genres={catalog.genres} />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
