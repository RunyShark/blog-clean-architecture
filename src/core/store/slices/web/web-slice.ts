import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface BlogData {
  title: string;
  author: string;
  dateOfPublication: string;
  content: string;
  imgUrl?: string;
}

interface FetchControl {
  loading: boolean;
  error: boolean;
  errorMessage: string;
  offline: boolean;
}

interface InitialState {
  blogData: BlogData[];
  fetchControl: FetchControl;
}

const initialState: InitialState = {
  blogData: [],
  fetchControl: {
    loading: false,
    error: false,
    errorMessage: '',
    offline: false,
  },
};

export const webSlice = createSlice({
  name: 'web',
  initialState,
  reducers: {
    setBlog: (state, action: PayloadAction<InitialState>) => {},
    updateBlogData: (state, action: PayloadAction<InitialState>) => {},
    setLoadingState: (state, action: PayloadAction<boolean>) => {},
    setErrorState: (state, action: PayloadAction<boolean>) => {},
    resetErrorState: (state) => {},
    setOfflineState: (state, action: PayloadAction<boolean>) => {},
  },
});

export const {
  setBlog,
  updateBlogData,
  setLoadingState,
  setErrorState,
  resetErrorState,
  setOfflineState,
} = webSlice.actions;

export default webSlice.reducer;
