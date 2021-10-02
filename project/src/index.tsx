import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import MOVIES from './mock/small-cards-movies';
import GENRES from './mock/genres';
import PROMO from './mock/promo-movie';

ReactDOM.render(
  <React.StrictMode>
    <App movies={MOVIES} genres={GENRES} promo={PROMO} />
  </React.StrictMode>,
  document.getElementById('root'),
);
