import SmallFilmCard, { SmallFilmCardSkeleton } from '../small-film-card';
import CatalogType from '../../types/catalog-type';
import GenresList from '../genres-list/genres-list';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filteredMovieListSelector } from '../../utils/filtered-movie-selector';
import style from './catalog.module.scss';

const enum CatalogData {
  SimilarLimit = 4,
  DefaultLimit = 8
}

function Catalog({
  genres = false,
  similar = false,
}: CatalogType): JSX.Element {
  const initialLimit = similar ? CatalogData.SimilarLimit : CatalogData.DefaultLimit;

  const filteredMovies = useSelector(filteredMovieListSelector);
  const [limit, setLimit] = useState<number>(initialLimit);

  /*
    Are u glad? 😡
    This behavior sucks
  */

  useEffect(() => setLimit(initialLimit), [filteredMovies]);

  return (
    <section
      className={`${style.root} ${similar ? style['root--like-this'] : ''}`}
    >
      <h2 className={`${style.title} ${!similar && 'visually-hidden'} `}>
        {similar ? 'More like this' : 'Catalog'}
      </h2>

      {genres && <GenresList />}

      <div className={style.list}>
        {filteredMovies
          ? filteredMovies.map(
            (movie, index) =>
              index < limit && (<SmallFilmCard movie={movie} key={movie.id} />))
          : [...Array(initialLimit).keys()].map((key) => (
            <SmallFilmCardSkeleton key={key} />
          ))}
      </div>

      {filteredMovies && filteredMovies.length >= limit + 1 && !similar && (
        <button
          className={style.button}
          type='button'
          onClick={() => setLimit(() => limit + 8)}
        >
          Show more
        </button>
      )}
    </section>
  );
}
export default Catalog;
