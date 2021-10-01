import Header from '../../header/header';
import Catalog from '../../catalog/catalog';
import Footer from '../../footer/footer';

import type SmallFilmCardType from '../../../types/small-fim-card-type';

type MyListType = {
  list: Array<SmallFilmCardType>;
};

function MyList({ list }: MyListType): JSX.Element {
  return (
    <div className='user-page'>
      <Header className='user-page__head' headline='My list' />
      <Catalog list={list} />
      <Footer />
    </div>
  );
}

export default MyList;
