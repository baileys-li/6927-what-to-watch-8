const STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse();
function ReviewForm(): JSX.Element {
  return (
    <div className='add-review'>
      <form action='#' className='add-review__form'>
        <div className='rating'>
          <div className='rating__stars'>
            {STARS.map((star) => (
              <>
                <input
                  className='rating__input'
                  id={`star-${star}`}
                  type='radio'
                  name='rating'
                  value={star}
                  defaultChecked={star === 8}
                />
                <label className='rating__label' htmlFor={`star-${star}`}>
                  Rating {star}
                </label>
              </>
            ))}
          </div>
        </div>

        <div className='add-review__text'>
          <textarea
            className='add-review__textarea'
            name='review-text'
            id='review-text'
            placeholder='Review text'
          />
          <div className='add-review__submit'>
            <button className='add-review__btn' type='submit'>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
