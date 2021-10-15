import MovieType from '../../../types/movie-type';
import { formatRunTime } from '../../../utils/utils';
import s from './movie-details.module.scss';

type movieDetailsProps = {
  movie: Pick<
    MovieType,
    'director' | 'starring' | 'runTime' | 'genre' | 'released'
  >;
};

function MovieDetails({ movie }: movieDetailsProps): JSX.Element {
  const { director, starring, runTime, genre, released } = movie;
  return (
    <dl className={s.wrapper}>
      <div className={s.col}>
        <div className={s.item}>
          <dt>Director</dt>
          <dd>{director}</dd>
        </div>

        <div className={s.item}>
          <dt>Starring</dt>
          {starring.map((actor) => (
            <dd key={actor}>{actor}</dd>
          ))}
        </div>
      </div>

      <div className={s.col}>
        <div className={s.item}>
          <dt>Run Time</dt>
          <dd>{formatRunTime(runTime)}</dd>
        </div>

        <div className={s.item}>
          <dt>Genre</dt>
          <dd>{genre}</dd>
        </div>

        <div className={s.item}>
          <dt>Released</dt>
          <dd>{released}</dd>
        </div>
      </div>
    </dl>
  );
}

export default MovieDetails;
