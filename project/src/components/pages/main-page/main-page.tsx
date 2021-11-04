import Footer from '../../footer/footer';
import PromoFilm from '../../promo-film/promo-film';
import Catalog from '../../catalog/catalog';
import { useDispatch } from 'react-redux';
import { getAllMovies } from '../../../store/actions/filmsActions';

function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  dispatch(getAllMovies());

  return (
    <>
      <PromoFilm />
      <div className='page-content'>
        <Catalog genres />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
