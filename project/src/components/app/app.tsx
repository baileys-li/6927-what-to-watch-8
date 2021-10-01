import MainPage from '../main-page/main-page';
import MOVIES from '../../mock/small-cards-movies';

function App(): JSX.Element {
  return <MainPage list={MOVIES}/>;
}

export default App;
