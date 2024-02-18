import { configureStore } from '@reduxjs/toolkit';
import webSlice from './slices/web/web-slice';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, webSlice);

export const store = configureStore({
  reducer: {
    web: persistedReducer,
  },
  devTools: process.env.NEXT_PUBLIC_NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
