import ReviewType from '../../types/review-type';
import { ThunkActionResult } from '../../types/thunk-action';
import { setReviews } from '../slice/reviewsReducer';


export const getReviewsByID =
  (id: number | string): ThunkActionResult => async (dispatch, _getState, api) => {
    await api
      .get<ReviewType[]>(`/comments/${id}`)
      .then(({ data }) => {
        dispatch(setReviews(data));
      });
  };
