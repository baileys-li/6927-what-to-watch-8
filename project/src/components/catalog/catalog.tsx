// import style from 'catalog.module.scss';
import SmallFilmCard from '../small-film-card/small-film-card';
import CatalogType from '../../types/catalog-type';

function Catalog({ list, genres }: CatalogType): JSX.Element {
  return (
    <section className='catalog'>
      <h2 className='catalog__title visually-hidden'>Catalog</h2>

      <ul className='catalog__genres-list'>
        {genres.map((genre, index) => (
          <li
            className={`catalog__genres-item ${
              index === 0 && 'catalog__genres-item--active'
            } `}
            key={genre}
          >
            <a href='#' className='catalog__genres-link'>
              {genre}
            </a>
          </li>
        ))}
      </ul>

      <div className='catalog__films-list'>
        {list.map((movie) => (
          <SmallFilmCard
            title={movie.title}
            imageSource={movie.imageSource}
            key={movie.title}
          />
        ))}
      </div>

      <div className='catalog__more'>
        <button className='catalog__button' type='button'>
          Show more
        </button>
      </div>
    </section>
  );
}

export default Catalog;
