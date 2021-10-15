import style from './movie-reviews.module.scss';
import Review from '../../review/review';
import useData from '../../../hooks/useData';
import type ReviewType from '../../../types/review-type';

type MovieReviewsProps = {
  id: number;
};

function MovieReviews({ id }: MovieReviewsProps): JSX.Element {
  const { isLoaded, error, response } = useData<ReviewType[]>(
    `/comments/${id}`,
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!isLoaded || response === undefined) {
    return <div>Loading...</div>;
  } else {
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
        {reviews.map((column) => (
          <div className={style.column} key={column[0].id}>
            {column.map((review) => (
              <Review key={review.id} content={review} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default MovieReviews;
