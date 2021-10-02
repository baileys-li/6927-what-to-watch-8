import style from './catalog.module.scss';
import SmallFilmCard from '../small-film-card/small-film-card';
import CatalogType from '../../types/catalog-type';

function Catalog({ list, genres, similar = false }: CatalogType): JSX.Element {
  return (
    <section
      className={`${style.catalog} ${similar && style['catalog--like-this']}`}
    >
      <h2
        className={`${style.catalog__title} ${!similar && 'visually-hidden'} `}
      >
        {similar ? 'More like this' : 'Catalog'}
      </h2>

      {genres && (
        <ul className={style['catalog__genres-list']}>
          {genres.map((genre, index) => (
            <li className={style['catalog__genres-item']} key={genre}>
              <a
                href='#'
                className={style['catalog__genres-link']}
                aria-selected={index === 0}
              >
                {genre}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className={style['catalog__films-list']}>
        {list.map((movie) => (
          <SmallFilmCard movie={movie} key={movie.title} />
        ))}
      </div>

      {list.length > 9 && (
        <button className={style['catalog__button']} type='button'>
          Show more
        </button>
      )}
    </section>
  );
}

export default Catalog;
