import type ReviewType from '../../types/review-type';
import { normalizeDateTime } from '../../utils/utils';
import style from './review.module.scss';

type ReviewProps = {
  content: ReviewType;
};

function Review({ content }: ReviewProps): JSX.Element {
  const { rating, user, date, comment } = content;

  return (
    <figure className={style.review}>
      <blockquote className={style.quote}>
        <p className={style.text}>{comment}</p>
      </blockquote>
      <figcaption className={style.details}>
        <p className={style.author}>{user.name}</p>
        <time className={style.date} dateTime={date}>
          {normalizeDateTime(date)}
        </time>
        <div className={style.rating}>
          {rating.toFixed(1).toString().replace('.', ',')}
        </div>
      </figcaption>
    </figure>
  );
}

export default Review;
