import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import LinkType from '../../types/link';

type NavigationState = {
  list: LinkType[] | null;
}

export const initialState: NavigationState = {
  list: null,
};

const breadcrumbsStore = createSlice({
  name: 'breadcrumbs',
  initialState,
  reducers: {
    rewriteAll: (state, action: PayloadAction<LinkType[]>) => {state.list = action.payload;},
  },
});

export const { rewriteAll } = breadcrumbsStore.actions;
export default breadcrumbsStore.reducer;
