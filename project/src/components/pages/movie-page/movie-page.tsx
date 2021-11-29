import Footer from '../../footer/footer';
import PromoFilm from '../../promo-film/promo-film';
import Catalog from '../../catalog/catalog';
import Header from '../../header/header';

import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getSimilarMoviesList } from '../../../store/actions/films-actions';
import { useEffect } from 'react';
import { getReviews } from '../../../store/actions/reviews-actions';
import { getMovieByID } from '../../../store/actions/promo-movie-actions';

function MoviePage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieByID(id as string));
    dispatch(getSimilarMoviesList(id as string));
    dispatch(getReviews(id as string));
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
