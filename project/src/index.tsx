import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import MOVIES from './mock/small-cards-movies';
import GENRES from './mock/genres';

ReactDOM.render(
  <React.StrictMode>
    <App movies={MOVIES} genres={GENRES} />
  </React.StrictMode>,
  document.getElementById('root'),
);
