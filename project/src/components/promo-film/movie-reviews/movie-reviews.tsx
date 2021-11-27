import style from './movie-reviews.module.scss';
import Review from '../../review/review';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';

function MovieReviews(): JSX.Element {
  const reviewsList = useSelector((state: RootState) => state.reviews.list);

  const listMiddle = reviewsList.length / 2;

  const columns =
    listMiddle < 1
      ? [reviewsList]
      : [
        reviewsList.slice(0, Math.round(listMiddle)),
        reviewsList.slice(Math.round(listMiddle)),
      ];

  return (
    <div className={style.wrapper}>
      {reviewsList.length === 0
        ? 'No reviews'
        : columns.map((reviews) => (
          <div className={style.column} key={reviews[0].id}>
            {reviews.map((review) => (
              <Review key={review.id} content={review} />
            ))}
          </div>
        ))}
    </div>
  );
}

export default MovieReviews;
