import style from './genres-list.module.scss';
import { Genre } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { updateFilter } from '../../store/actions/filmsActions';

function GenresList(): JSX.Element {
  const selectedFilter = useSelector((state: RootState) => state.movies.filter);

  const dispatch = useDispatch();

  // const handleClick = () => {

  // }

  const genresList = [
    Genre.all,
    Genre.comedies,
    Genre.crime,
    Genre.documentary,
    Genre.dramas,
    Genre.horror,
    Genre.pg,
    Genre.romance,
    Genre.sciFi,
    Genre.thrillers,
  ];

  return (
    <ul className={style.wrapper}>
      {genresList.map((genre, index) => (
        <li className={style.item} key={genre}>
          <button
            className={style.link}
            role="tab"
            aria-selected={genre === selectedFilter}
            onClick={() => dispatch(updateFilter(genre))}
          >
            {genre}
          </button>
        </li>
      ))}
    </ul>
  );
}
export default GenresList;
