import Header from '../../header/header';
import Catalog from '../../catalog/catalog';
import Footer from '../../footer/footer';
import { EndPoint } from '../../../const';
import { useDispatch } from 'react-redux';
import { getMoviesList } from '../../../store/actions/filmsActions';


function MyList(): JSX.Element {
  const dispatch = useDispatch();
  dispatch(getMoviesList(EndPoint.Favorite));
  return (
    <div className='user-page'>
      <Header className='user-page__head' headline='My list' />
      <Catalog />
      <Footer />
    </div>
  );
}

export default MyList;
