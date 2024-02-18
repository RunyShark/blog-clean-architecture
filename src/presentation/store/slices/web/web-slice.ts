import { BlogEntity } from '@/core/entities';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FetchControl {
  loading: boolean;
  error: boolean;
  errorMessage: string;
  isOnline: boolean;
}

interface InitialState {
  blogData: BlogEntity[];
  filterBlog: BlogEntity[];
  isActiveFilter: boolean;
  blogSelected: BlogEntity;
  fetchControl: FetchControl;
}

const initialState: InitialState = {
  blogData: [
    {
      author: '',
      content: '',
      dateOfPublication: '',
      id: '',
      imgUrl: '',
      title: '',
    },
  ],
  isActiveFilter: false,
  filterBlog: [],
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
    isOnline: false,
  },
};

export const webSlice = createSlice({
  name: 'web',
  initialState,
  reducers: {
    setBlog: (state, { payload }: PayloadAction<BlogEntity[]>) => {
      state.isActiveFilter = false;
      state.blogData = payload;
      state.filterBlog = payload;
    },

    getByIdBlog: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.blogSelected = state.blogData.find(
        (blog) => blog.id === payload.id
      )!;
    },

    filterBlog: (state, { payload }: PayloadAction<string>) => {
      state.isActiveFilter = true;
      state.filterBlog = state.blogData.filter((blog) => {
        if (blog.title.toLowerCase().includes(payload.toLowerCase()))
          return true;

        if (blog.author.toLowerCase().includes(payload.toLowerCase()))
          return true;

        if (blog.content.toLowerCase().includes(payload.toLowerCase()))
          return true;
      });
    },

    setInternetConnectionState: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.fetchControl.isOnline = payload;
    },

    updateBlogData: (state, { payload }: PayloadAction<BlogEntity>) => {
      state.filterBlog.unshift(payload);
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

    clearFilter: (state) => {
      state.isActiveFilter = false;
      state.filterBlog = state.blogData;
    },
  },
});

export const {
  filterBlog,
  setBlog,
  updateBlogData,
  setLoadingState,
  setErrorState,
  resetErrorState,
  setInternetConnectionState,
  getByIdBlog,
  clearFilter,
} = webSlice.actions;

export default webSlice.reducer;
