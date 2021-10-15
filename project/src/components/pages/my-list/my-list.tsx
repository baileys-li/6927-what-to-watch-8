import Header from '../../header/header';
import Catalog from '../../catalog/catalog';
import Footer from '../../footer/footer';


function MyList(): JSX.Element {
  return (
    <div className='user-page'>
      <Header className='user-page__head' headline='My list' />
      <Catalog path='/favorite' />
      <Footer />
    </div>
  );
}

export default MyList;
