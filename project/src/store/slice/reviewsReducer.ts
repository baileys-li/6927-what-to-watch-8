import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ReviewType from '../../types/review-type';

type NewReviewStatus = {
  isLoading: boolean,
  isSuccess: boolean,
  error?: string | undefined,
}

type ReviewsState = {
  list: ReviewType[],
  status?: NewReviewStatus,
  }

const newReviewInitialStatus = {
  isLoading: false,
  isSuccess: false,
  error: undefined,
};

const initialState: ReviewsState = {
  list: [],
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews: (state, action: PayloadAction<ReviewType[]>) => {
      state.list = action.payload;
      state.status = newReviewInitialStatus;
    },
    changeStatus: (state, action: PayloadAction<NewReviewStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { setReviews, changeStatus } = reviewsSlice.actions;
export default reviewsSlice.reducer;
