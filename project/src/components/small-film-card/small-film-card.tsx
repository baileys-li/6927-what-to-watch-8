import { Link } from 'react-router-dom';
import s from './small-film-card.module.scss';
import { adaptFromSnakeToCamel } from '../../utils/adapter';
import type MovieType from '../../types/movie-type';

type SmallFilmCardProps = {
  movie: Pick<MovieType, 'name' | 'id' | 'previewImage'>;
  className?: string;
};

function SmallFilmCard({ movie, className }: SmallFilmCardProps): JSX.Element {
  const { name, previewImage, id }: MovieType = adaptFromSnakeToCamel(movie);

  return (
    <article className={`${s.card} ${className}`}>
      <img
        className={s.card__image}
        src={previewImage.replace('7.', '8.')}
        alt='Poster of movie'
        width='280'
        height='175'
      />
      <h3 className={s.card__title}>
        <Link to={`/films/${id}`} className={s.card__link}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
