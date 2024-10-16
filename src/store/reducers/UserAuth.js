// this file contain reducer part of admin LL.
import { createSlice } from "@reduxjs/toolkit";
const UserAuth = createSlice({
  name: "UserAuth",
  initialState: {
    UserAuth: [],
    DepartmentData: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET AdminCL
    getUserAuthStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserAuthSuccess: (state, action) => {
      state.isFetching = false;
      state.UserAuth = action.payload;
    },
    getUserAuthFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
   
   registerUserAuthStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
   registerUserAuthSuccess: (state, action) => {
      state.isFetching = false;
      state.UserAuth = action.payload;
    },
   registerUserAuthFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  
   
  },
});
export const {
  getUserAuthStart,
  getUserAuthFailure,
  getUserAuthSuccess,
 registerUserAuthFailure,
 registerUserAuthStart,
 registerUserAuthSuccess,
  
  
} = UserAuth.actions;

export default UserAuth.reducer;
