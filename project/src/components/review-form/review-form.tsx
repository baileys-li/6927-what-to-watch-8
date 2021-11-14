import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { publishReview } from '../../store/actions/reviewsAction';
import { RootState } from '../../store/reducer';
import style from './review-form.module.scss';

const STARS = [...Array(11).keys()].slice(1);

function ReviewForm(): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const status = useSelector((state: RootState) => state.reviews.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();


  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(publishReview({ rating, comment }));
  };

  useEffect(() => {
    status?.isSuccess &&
      navigate(`/films/${id}`);
  }, [status, id, navigate]);

  return (
    <form className={style.form} action='#' onSubmit={handleSubmit}>
      <div className={style.stars}>
        {STARS.map((star) => (
          <label
            key={star}
            aria-label={`Rating ${star}`}
            className={[
              style.star,
              star <= rating ? style['star--selected'] : '',
              status?.isLoading ? style['star--disabled'] : '',
            ].join(' ')}
          >
            <input
              type='radio'
              name='rating'
              value={star}
              disabled={status?.isLoading}
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
          disabled={status?.isLoading}
          onInput={(evt) => setComment(evt.currentTarget.value)}
          minLength={50}
          maxLength={400}
          value={comment}
        />

        <button
          className={style.button}
          type='submit'
          disabled={
            comment.length < 50 || comment.length > 400 || !rating
          }
        >
          Post
        </button>
      </div>
      {status?.error && <p>{status.error}</p>}
    </form>
  );
}

export default ReviewForm;
