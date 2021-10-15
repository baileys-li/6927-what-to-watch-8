import Footer from '../../footer/footer';
import PromoFilm from '../../promo-film/promo-film';
import Catalog from '../../catalog/catalog';

import type CatalogType from '../../../types/catalog-type';

type MainPageType = {
  catalog: CatalogType;
};

function MainPage({ catalog }: MainPageType): JSX.Element {

  return (
    <>
      <PromoFilm />
      <div className='page-content'>
        <Catalog genres={catalog.genres} path='/films' />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
