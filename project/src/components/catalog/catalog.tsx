import style from './catalog.module.scss';
import SmallFilmCard from '../small-film-card/small-film-card';
import CatalogType from '../../types/catalog-type';
import useData from '../../hooks/useData';
import MovieType from '../../types/movie-type';
import GenresList from '../genres-list/genres-list';

function Catalog({ genres = false, similar = false, path }: CatalogType): JSX.Element {
  const { isLoaded, error, response: list } = useData<MovieType[]>(path);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoaded || list === undefined) {
    return <div>Loading...</div>;
  } else {
    return (
      <section
        className={`${style.catalog} ${similar && style['catalog--like-this']}`}
      >
        <h2
          className={`${style.catalog__title} ${
            !similar && 'visually-hidden'
          } `}
        >
          {similar ? 'More like this' : 'Catalog'}
        </h2>

        {genres && (<GenresList />)}

        <div className={style['catalog__films-list']}>
          {list.map(
            (movie, index) =>
              index < 8 && <SmallFilmCard movie={movie} key={movie.id} />,
          )}
        </div>

        {list.length > 9 && (
          <button className={style['catalog__button']} type='button'>
            Show more
          </button>
        )}
      </section>
    );
  }
}
export default Catalog;
