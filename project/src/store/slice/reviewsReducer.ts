import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ReviewType from '../../types/review-type';

type ReviewsState = {
  list: ReviewType[]
}

const initialState: ReviewsState = {
  list: [],
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews: (state, action: PayloadAction<ReviewType[]>) => state = {list: action.payload},
  },
});

export const { setReviews} = reviewsSlice.actions;
export default reviewsSlice.reducer;
