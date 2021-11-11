import style from './movie-description.module.scss';

import Button from '../../button/button';
import SpriteIcon from '../../sprite-icon/sprite-icon';

import type MovieType from '../../../types/movie-type';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsFavorite } from '../../../store/actions/filmsActions';
import { RootState } from '../../../store/reducer';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useNavigate } from 'react-router';

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
  const { status } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeStatus = () => {
    const isAuth = status === AuthorizationStatus.Auth;

    if (isAuth) {
      const endPointStatus = movie.isFavorite ? 0 : 1;
      dispatch(changeIsFavorite(movie.id, endPointStatus));
    } else {
      navigate(AppRoute.SignIn);
    }

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
