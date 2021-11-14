import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ReviewType from '../../types/review-type';
import { getReviews, publishReview } from '../actions/reviewsActions';

type ReviewsState = {
  list: ReviewType[];
  isLoading: boolean;
  isSuccess: boolean;
  error: string | undefined;
};

const initialState: ReviewsState = {
  list: [],
  isLoading: false,
  isSuccess: false,
  error: undefined,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: {
    [String(getReviews.fulfilled)]: (
      state,
      action: PayloadAction<ReviewType[]>,
    ) => {
      state.list = action.payload;
      state.isSuccess = false;
    },
    [String(publishReview.pending)]: (state) => {
      state.isLoading = true;
    },
    [String(publishReview.fulfilled)]: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
    [String(publishReview.rejected)]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default reviewsSlice.reducer;
