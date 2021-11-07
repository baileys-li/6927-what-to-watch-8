import Footer from '../../footer/footer';
import PromoFilm from '../../promo-film/promo-film';
import Catalog from '../../catalog/catalog';

import { useParams } from 'react-router';
import type RouteParams from '../../../types/route-params-type';
import { useDispatch } from 'react-redux';
import { getMovie, getMoviesList } from '../../../store/actions/filmsActions';
import { EndPoint } from '../../../const';

function MoviePage(): JSX.Element {
  const { id } = useParams<RouteParams>();
  const dispatch = useDispatch();

  dispatch(getMovie(`${EndPoint.Films}/${id}`));
  dispatch(getMoviesList(`${EndPoint.Films}/${id}/similar`));

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
