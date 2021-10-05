import returnLevel from './return-level';
import style from './movie-rating.module.scss';

type MovieRatingType = {
  rating: number;
  scoresCount: number;
};

function MovieRating({ rating, scoresCount }: MovieRatingType): JSX.Element {
  return (
    <div className={style.wrapper}>
      <div className={style.score}>{rating}</div>
      <p className={style.meta}>
        <span className={style.level}>{returnLevel(rating)}</span>
        <span className={style.count}>{scoresCount} ratings</span>
      </p>
    </div>
  );
}

export default MovieRating;
