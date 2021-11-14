import style from './movie-reviews.module.scss';
import Review from '../../review/review';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';

function MovieReviews(): JSX.Element {
  const list = useSelector((state: RootState) => state.reviews.list);

  const listMiddle = list.length / 2;

  const reviews =
    listMiddle < 1
      ? [list]
      : [
        list.slice(0, Math.round(listMiddle)),
        list.slice(Math.round(listMiddle)),
      ];

  return (
    <div className={style.wrapper}>
      {list.length === 0
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
