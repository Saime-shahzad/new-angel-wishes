import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";
// import axios from "axios";

export const forgetPassword = createAsyncThunk(
  "passwordReset/forgetPassword",
  async (userData, { rejectWithValue }) => {
    console.log("userData>>>>>", userData);
    
    try {
      const response = await axiosInstance.post("/forget-password", userData);
      console.log("response>>>>>data", response);
      
      // const response = await axiosInstance.post("/login", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "passwordReset/updatePassword",
  async (userData, { rejectWithValue }) => {
    console.log("userdata...slice>>", userData);
    
    try {
      const response = await axiosInstance.post("/reset-password", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// const forgetPasswordSlice = createSlice({
//     name: "passwordReset",
//     initialState: {
//       data: null,
//       loading: false,
//       error: null,
//     },
//     reducers: {
//         logout: (state) => {
//           state.data = null;
         
//         },
//       },
//     extraReducers: (builder) => {
//       builder.addCase(forgetPassword.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       });
//       builder.addCase(forgetPassword.fulfilled, (state, action) => {
//         console.log("action>>>>", action.payload);
//         state.loading = false;  
//         state.data = action.payload.message;
//       });
//       builder.addCase(forgetPassword.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//     },
//   });
  
//   // Export the reducer, not extraReducers
// export const { logout } = forgetPasswordSlice.actions;

//   export default forgetPasswordSlice.reducer;
  


const initialState = {
  data: [],
  isFetching: false,
  error: "",
};

const forgetPasswordSlice = createSlice({
  name: "passwordReset",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(forgetPassword.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(forgetPassword.fulfilled, (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(forgetPassword.rejected, (state, action) => {
      state.isFetching = false;
      state.data = [];
      state.error = action.error;
    });
   
  },
});
export default forgetPasswordSlice.reducer;