import s from './small-film-card.module.scss';
import SmallFilmCardType from '../../types/small-fim-card-type';

type SmallFilmCardProps = {
  movie: SmallFilmCardType;
  className?: string;
};

function SmallFilmCard({
  movie,
  className,
}: SmallFilmCardProps): JSX.Element {
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
        <a className={s.card__link} href='film-page.html'>
          {movie.title}
        </a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
