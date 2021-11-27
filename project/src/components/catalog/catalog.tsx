import SmallFilmCard, { SmallFilmCardSkeleton } from '../small-film-card';
import CatalogType from '../../types/catalog-type';
import GenresList from '../genres-list/genres-list';
import useCatalog from '../../hooks/useCatalog';

import style from './catalog.module.scss';

const enum CatalogData {
  SimilarLimit = 4,
  DefaultLimit = 8
}

function Catalog({
  genres = false,
  similar = false,
}: CatalogType): JSX.Element {
  const [list, limit, setLimit] = useCatalog(similar ? CatalogData.SimilarLimit : CatalogData.DefaultLimit);

  return (
    <section
      className={`${style.root} ${similar ? style['root--like-this'] : ''}`}
    >
      <h2 className={`${style.title} ${!similar && 'visually-hidden'} `}>
        {similar ? 'More like this' : 'Catalog'}
      </h2>

      {genres && <GenresList />}

      <div className={style.list}>
        {list
          ? list.map(
            (movie, index) =>
              index < limit && (<SmallFilmCard movie={movie} key={movie.id} />))
          : [...Array(4).keys()].map((key) => (
            <SmallFilmCardSkeleton key={key} />
          ))}
      </div>

      {list && list.length >= limit + 1 && !similar && (
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
