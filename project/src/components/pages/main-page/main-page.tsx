// import { useState, useEffect } from 'react';
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
        <Catalog list={catalog.list} genres={catalog.genres} />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
