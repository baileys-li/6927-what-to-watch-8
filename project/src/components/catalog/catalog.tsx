import style from './catalog.module.scss';
import SmallFilmCard from '../small-film-card/small-film-card';
import CatalogType from '../../types/catalog-type';
import GenresList from '../genres-list/genres-list';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useEffect, useState } from 'react';
import MovieType from '../../types/movie-type';
import { Genre } from '../../const';

function Catalog({
  genres = false,
  similar = false,
  path,
}: CatalogType): JSX.Element {
  const { list, loadingList, filter } = useSelector(
    (state: RootState) => state.movies,
  );

  const [filteredList, setFilteredList] = useState<MovieType[] | null>(null);

  useEffect(() => {
    list &&
      setFilteredList(
        filter === Genre.all
          ? list
          : list.filter((movie) => movie.genre === filter),
      );
  }, [filter, list]);

  if (loadingList) {
    return <div>Loading...</div>;
  } else {
    return (
      <section
        className={`${style.catalog} ${similar && style['catalog--like-this']}`}
      >
        <h2
          className={`${style.catalog__title} ${!similar && 'visually-hidden'
          } `}
        >
          {similar ? 'More like this' : 'Catalog'}
        </h2>

        {genres && <GenresList />}

        <div className={style['catalog__films-list']}>
          {filteredList?.map(
            (movie, index) =>
              index < 8 && <SmallFilmCard movie={movie} key={movie.id} />,
          )}
        </div>

        {filteredList && filteredList.length > 9 && (
          <button className={style['catalog__button']} type='button'>
            Show more
          </button>
        )}
      </section>
    );
  }
}
export default Catalog;
