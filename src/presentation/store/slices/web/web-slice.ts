import { BlogEntity } from '@/core/entities';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FetchControl {
  loading: boolean;
  error: boolean;
  errorMessage: string;
  offline: boolean;
}

interface InitialState {
  blogData: BlogEntity[];
  blogSelected: BlogEntity;
  fetchControl: FetchControl;
}

const initialState: InitialState = {
  blogData: [],
  blogSelected: {
    author: '',
    content: '',
    dateOfPublication: '',
    id: '',
    imgUrl: '',
    title: '',
  },
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
    setBlog: (state, { payload }: PayloadAction<BlogEntity[]>) => {
      state.blogData = payload;
    },

    getByIdBlog: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.blogSelected = state.blogData.find(
        (blog) => blog.id === payload.id
      )!;
    },

    filterBlog: (state, { payload }: PayloadAction<string>) => {
      state.blogData = state.blogData.filter((blog) =>
        blog.title.toLowerCase().includes(payload.toLowerCase())
      );
    },

    setOfflineState: (state, { payload }: PayloadAction<boolean>) => {
      state.fetchControl.offline = payload;
    },

    updateBlogData: (state, { payload }: PayloadAction<BlogEntity>) => {
      state.blogData.push(payload);
    },

    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.fetchControl.loading = action.payload;
    },
    setErrorState: (state, { payload }: PayloadAction<{ message: string }>) => {
      state.fetchControl.error = true;
      state.fetchControl.errorMessage = payload.message;
    },
    resetErrorState: (state) => {
      state.fetchControl.error = false;
      state.fetchControl.errorMessage = '';
    },
  },
});

export const {
  setBlog,
  updateBlogData,
  setLoadingState,
  setErrorState,
  resetErrorState,
  setOfflineState,
  getByIdBlog,
} = webSlice.actions;

export default webSlice.reducer;
