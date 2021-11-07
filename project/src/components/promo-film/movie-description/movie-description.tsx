import style from './movie-description.module.scss';

import Button from '../../button/button';
import SpriteIcon from '../../sprite-icon/sprite-icon';

import type MovieType from '../../../types/movie-type';
import { useDispatch } from 'react-redux';
import { changeIsFavorite } from '../../../store/actions/filmsActions';

type MovieDescriptionType = {
  className?: string;
  movie: MovieType;
  review: boolean;
};

function MovieDescription({
  className,
  movie,
  review = false,
}: MovieDescriptionType): JSX.Element {
  const dispatch = useDispatch();

  const changeStatus = () => {
    const endPointStatus = movie.isFavorite ? 0 : 1;
    dispatch(changeIsFavorite(movie.id, endPointStatus));
  };

  return (
    <div className={className}>
      <h2 className={style['title']}>{movie.name}</h2>
      <p className={style['meta']}>
        <span className={style['genre']}>{movie.genre}</span>
        <time dateTime={movie.released.toString()}>{movie.released}</time>
      </p>

      <div className={style.buttons}>
        <Button href={`/player/${movie.id}`}>
          <SpriteIcon id='play-s' width={19} />
          Play
        </Button>
        {movie.isFavorite ? (
          <Button onClick={changeStatus}>In My List</Button>
        ) : (
          <Button onClick={changeStatus}>
            <SpriteIcon id='add' width='19' height='20' />
            My list
          </Button>
        )}

        {review && (
          <Button href={`/films/${movie.id}/review`}>Add review</Button>
        )}
      </div>
    </div>
  );
}

export default MovieDescription;
