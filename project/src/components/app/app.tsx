import MainPage from '../main-page/main-page';
import MOVIES from '../../mock/small-cards-movies';
import GENRES from '../../mock/genres';

function App(): JSX.Element {
  return <MainPage list={MOVIES} genres={GENRES} />;
}

export default App;
