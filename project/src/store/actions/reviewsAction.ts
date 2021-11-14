import { AxiosError } from 'axios';
import ReviewType from '../../types/review-type';
import { ThunkActionResult } from '../../types/thunk-action';
import { setReviews, changeStatus } from '../slice/reviewsReducer';


export const getReviewsByID =
  (id: number | string): ThunkActionResult => async (dispatch, _getState, api) => {
    await api
      .get<ReviewType[]>(`/comments/${id}`)
      .then(({ data }) => {
        dispatch(setReviews(data));
      });
  };

type SendReview = {
  rating:  number;
  comment: string;
}

export const publishReview =
  (body: SendReview): ThunkActionResult => async (dispatch, getState, api) => {
    const id = getState().movies.selected?.id;

    dispatch(changeStatus({isLoading: true, isSuccess: false}));

    await api
      .post<ReviewType[]>(`/comments/${id}`, body)
      .then(({ data }) => {
        dispatch(changeStatus({isLoading: false, isSuccess: true}));
      }).catch(({ response} : AxiosError) => {
        dispatch(changeStatus({isLoading: false, isSuccess: false, error: response?.statusText}));
      });
  };
