import Footer from '../../footer/footer';
import PromoFilm from '../../promo-film/promo-film';
import Catalog from '../../catalog/catalog';
import Header from '../../header/header';

import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getMovie, getMoviesList } from '../../../store/actions/filmsActions';
import { EndPoint } from '../../../const';
import { useEffect } from 'react';

function MoviePage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie(`${EndPoint.Films}/${id}`));
    dispatch(getMoviesList(`${EndPoint.Films}/${id}/similar`));
  }, [dispatch, id]);

  return (
    <>
      <Header
        headline='What to Watch'
        className='app__header'
        hiddenHeadline
      />
      <PromoFilm full />
      <div className='page-content'>
        <Catalog similar />
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
