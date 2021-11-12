import { useState } from 'react';
import style from './review-form.module.scss';

const STARS = [...Array(11).keys()].slice(1);

function ReviewForm(): JSX.Element {
  const [rating, setRating] = useState<number>(8);
  const [comment, setComment] = useState<string>('');

  return (
    <form className={style.form} action='#'>
      <div className={style.stars}>
        {STARS.map((star) => (
          <label
            key={star}
            aria-label={`Rating ${star}`}
            className={[style.star, star <= rating ? style['star--selected'] : ''].join(' ')}
          >
            <input
              type='radio'
              name='rating'
              value={star}
              onInput={() => setRating(star)}
              defaultChecked={star === rating}
            />
            ★
          </label>
        ))}
      </div>

      <div className={style.text}>
        <textarea
          className={style.textarea}
          name='review-text'
          id='review-text'
          placeholder='Review text'
          onInput={(evt) => setComment(evt.currentTarget.value)}
          value={comment}
        />

        <button className={style.button} type='submit'>
          Post
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
