import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import ReviewType from '../../types/review-type';
import SendReview from '../../types/send-review';

export const getReviews = createAsyncThunk('reviews/getReviews',
  async (id: number | string, {extra, rejectWithValue}) => {

    const result = await (extra as AxiosInstance).get<ReviewType[]>(`/comments/${id}`)
      .then(({data}) => data)
      .catch((error: AxiosError) => error);

    if ((result as AxiosError).isAxiosError) {
      return rejectWithValue((result as AxiosError).response?.statusText);
    }
    return result;
  });


export const publishReview = createAsyncThunk('reviews/publishReviews',
  async (sendData: SendReview, {extra, rejectWithValue}) => {
    const result = await (extra as AxiosInstance).post<ReviewType[]>(`/comments/${sendData.id}`, sendData.body)
      .then(({data}: AxiosResponse) => ({isAxiosError: false, data}))
      .catch(({isAxiosError, response} : AxiosError) => ({isAxiosError, data: response?.statusText}));

    if (result.isAxiosError) {
      return rejectWithValue(result.data);
    }
    return result.data;
  });

type ReviewsState = {
  list: ReviewType[],
  isLoading: boolean,
  isSuccess: boolean,
  error: string | undefined,
  }

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
    [String(getReviews.fulfilled)]: (state, action: PayloadAction<ReviewType[]>) => {
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
    [String(publishReview.rejected)]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
} );

export default reviewsSlice.reducer;
