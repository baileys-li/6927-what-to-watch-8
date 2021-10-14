import { normalizeDateTime } from '../../utils/utils';
import style from './review.module.scss';

type ReviewType = {
  text: string;
  author: string;
  date: string;
  rating: number;
};

function Review({ text, author, date, rating }: ReviewType): JSX.Element {
  return (
    <figure className={style.review}>
      <blockquote className={style.quote}>
        <p className={style.text}>{text}</p>
      </blockquote>

      <figcaption className={style.details}>
        <p className={style.author}>{author}</p>
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
