import style from './movie-reviews.module.scss';
import Review from '../../review/review';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';

function MovieReviews(): JSX.Element {
  const response = useSelector((state: RootState) => state.reviews.list);

  const listMiddle = response.length / 2;

  const reviews =
    listMiddle < 1
      ? [response]
      : [
        response.slice(0, Math.floor(listMiddle)),
        response.slice(Math.round(listMiddle)),
      ];

  return (
    <div className={style.wrapper}>
      {response.length === 0
        ? 'No reviews'
        : reviews.map((column) => (
          <div className={style.column} key={column[0].id}>
            {column.map((review) => (
              <Review key={review.id} content={review} />
            ))}
          </div>
        ))}
    </div>
  );
}


export default MovieReviews;
