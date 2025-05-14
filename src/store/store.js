import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import userRducer from './feature/userSlice'
import commonReducer from './feature/commonSlice'

export const store = configureStore({
  reducer: {
    user: userRducer,
    common: commonReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([authApi.middleware]),
});
