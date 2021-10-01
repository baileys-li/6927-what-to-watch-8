import style from './catalog.module.scss';
import SmallFilmCard from '../small-film-card/small-film-card';
import CatalogType from '../../types/catalog-type';

function Catalog({ list, genres }: CatalogType): JSX.Element {
  return (
    <section className={style.catalog}>
      <h2 className={`${style.catalog__title} visually-hidden`}>Catalog</h2>

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

      <div className={style['catalog__films-list']}>
        {list.map((movie) => (
          <SmallFilmCard
            movie={movie}
            className={style['catalog__films-card']}
            key={movie.title}
          />
        ))}
      </div>

      <button className={style['catalog__button']} type='button'>
        Show more
      </button>
    </section>
  );
}

export default Catalog;
