import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import s from './small-film-card.module.scss';
import type SmallFilmCardType from '../../types/small-fim-card-type';

type SmallFilmCardProps = {
  movie: SmallFilmCardType;
  className?: string;
};

function SmallFilmCard({ movie, className }: SmallFilmCardProps): JSX.Element {
  return (
    <article className={`${s.card} ${className}`}>
      <img
        className={s.card__image}
        src={movie.imageSource}
        alt='Poster of movie'
        width='280'
        height='175'
      />
      <h3 className={s.card__title}>
        <Link to={AppRoute.Film}className={s.card__link}>
          {movie.title}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
