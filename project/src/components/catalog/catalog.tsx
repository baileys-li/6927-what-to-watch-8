import style from './catalog.module.scss';
import SmallFilmCard, { SmallFilmCardSkeleton } from '../small-film-card';
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
}: CatalogType): JSX.Element {
  const { list, filter } = useSelector(
    (state: RootState) => state.movies,
  );

  const [filteredList, setFilteredList] = useState<MovieType[] | null>(null);
  const [max, setMax] = useState<number>(8);

  useEffect(() => {
    list &&
      setFilteredList(
        filter === Genre.Initial
          ? list
          : list.filter((movie) => movie.genre === filter),
      );
  }, [filter, list]);


  return (
    <section
      className={`${style.root} ${similar ? style['root--like-this'] : ''}`}
    >
      <h2 className={`${style.title} ${!similar && 'visually-hidden'} `}>
        {similar ? 'More like this' : 'Catalog'}
      </h2>

      {genres && <GenresList />}

      <div className={style.list}>
        {filteredList ?
          filteredList.map(
            (movie, index) =>
              index < max && <SmallFilmCard movie={movie} key={movie.id} />,
          ) :
          [...Array(4).keys()].map((key) => <SmallFilmCardSkeleton key={key} />)}
      </div>

      {filteredList && filteredList.length >= max + 1 && (
        <button
          className={style.button}
          type='button'
          onClick={() => setMax(() => max + 8)}
        >
          Show more
        </button>
      )}
    </section>
  );

}
export default Catalog;
