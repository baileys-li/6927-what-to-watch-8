import Header from '../../header/header';
import Catalog from '../../catalog/catalog';
import Footer from '../../footer/footer';
import { useDispatch } from 'react-redux';
import { getFavorites } from '../../../store/actions/films-actions';
import { useEffect } from 'react';


function MyList(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <div className='user-page'>
      <Header className='user-page__head' headline='My list' />
      <Catalog />
      <Footer />
    </div>
  );
}

export default MyList;
