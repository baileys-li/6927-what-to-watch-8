import Footer from '../../footer/footer';
import PromoFilm from '../../promo-film/promo-film';
import Catalog from '../../catalog/catalog';
import { useDispatch } from 'react-redux';
import { getAllMovies, getMovie } from '../../../store/actions/filmsActions';
import { EndPoint } from '../../../const';
import Header from '../../header/header';

function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  dispatch(getMovie(EndPoint.Promo));
  dispatch(getAllMovies());

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
