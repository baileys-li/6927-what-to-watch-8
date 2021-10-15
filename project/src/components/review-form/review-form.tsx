import style from './review-form.module.scss';

const STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse();
function ReviewForm(): JSX.Element {
  return (
    <form className={style.form} action='#'>
      <div className={style.stars}>
        {STARS.map((star) => (
          <>
            <input
              className={style.star}
              id={`star-${star}`}
              type='radio'
              name='rating'
              value={star}
              defaultChecked={star === 8}
            />
            <label className={style.star__label} htmlFor={`star-${star}`}>
              Rating {star}
            </label>
          </>
        ))}
      </div>

      <div className={style.text}>
        <textarea
          className={style.textarea}
          name='review-text'
          id='review-text'
          placeholder='Review text'
        />

        <button className={style.button} type='submit'>
          Post
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
