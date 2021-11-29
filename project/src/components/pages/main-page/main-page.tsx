import Footer from '../../footer/footer';
import PromoFilm from '../../promo-film/promo-film';
import Catalog from '../../catalog/catalog';
import { useDispatch } from 'react-redux';
import { getAllMovies } from '../../../store/actions/filmsActions';
import Header from '../../header/header';
import { useEffect } from 'react';
import { getPromoMovie } from '../../../store/actions/promoMovieActions';

function MainPage(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPromoMovie());
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <>
      <Header
        headline='What to Watch'
        className='app__header'
        hiddenHeadline
      />
      <PromoFilm />
      <div className='page-content'>
        <Catalog genres />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
