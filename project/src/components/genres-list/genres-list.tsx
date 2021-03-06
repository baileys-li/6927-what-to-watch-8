import style from './genres-list.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { setFilter } from '../../store/slice/films-store';

function GenresList(): JSX.Element {
  const { filter, genres } = useSelector((state: RootState) => state.movies);

  const dispatch = useDispatch();

  return (
    <ul className={style.wrapper}>
      {genres && genres.map((genre) => (
        <li className={style.item} key={genre}>
          <button
            className={style.link}
            role="tab"
            aria-selected={genre === filter}
            onClick={() => dispatch(setFilter(genre))}
          >
            {genre}
          </button>
        </li>
      ))}
    </ul>
  );
}
export default GenresList;
