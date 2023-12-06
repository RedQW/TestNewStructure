import { configureStore } from "@reduxjs/toolkit";
import TestSlice from "./Slices/TestSlice";

const store = configureStore({
    reducer: {
      user_list:TestSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
  export default store;