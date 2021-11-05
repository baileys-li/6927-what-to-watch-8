import Footer from '../../footer/footer';
import PromoFilm from '../../promo-film/promo-film';
import Catalog from '../../catalog/catalog';

// import { useParams } from 'react-router';
// import type RouteParams from '../../../types/route-params-type';

function MoviePage(): JSX.Element {
  // const { id } = useParams<RouteParams>();

  return (
    <>
      <PromoFilm full />
      <div className='page-content'>
        <Catalog similar />
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
