import Footer from '../../footer/footer';
import PromoFilm from '../../promo-film/promo-film';
import Catalog from '../../catalog/catalog';

import GENRES from '../../../mock/genres';

function MainPage(): JSX.Element {
  return (
    <>
      <PromoFilm />
      <div className='page-content'>
        <Catalog genres={GENRES} path='/films' />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
