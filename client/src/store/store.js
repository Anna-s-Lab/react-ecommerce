import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";

// This code is setting up a Redux store using Redux Toolkit,
// which simplifies the process of creating and configuring the store.

// configureStore is a function provided by Redux Toolkit to create the Redux store.
// It comes with several built-in features, such as:

// 1- Automatically combining multiple reducers.
// 2- Adding middleware (like redux-thunk) by default.
// 3- Enabling Redux DevTools in development mode.

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
