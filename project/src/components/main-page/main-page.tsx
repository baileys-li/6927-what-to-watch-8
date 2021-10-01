// import Footer from '../footer/footer';
import PromoFilm from '../promo-film/promo-film';

// import Catalog from '../catalog/catalog';
import CatalogType from '../../types/catalog-type';

type MainPageType = CatalogType;

function MainPage({ list, genres }: MainPageType): JSX.Element {
  return (
    <>
      <PromoFilm
        title='The Grand Budapest Hotel'
        poster='img/the-grand-budapest-hotel-poster.jpg'
        background='img/bg-the-grand-budapest-hotel.jpg'
        genre='Drama'
        year='2014'
      />
      {/* <div className='page-content'>
        <Catalog list={list} genres={genres} />
        <Footer />
      </div> */}
    </>
  );
}

export default MainPage;
