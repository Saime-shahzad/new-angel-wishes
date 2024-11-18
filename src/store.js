import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import forgetPasswordReducer  from "./features/forgetPassword/forgetPasswordSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    passwordReset: forgetPasswordReducer,
  },
});

export default store;

