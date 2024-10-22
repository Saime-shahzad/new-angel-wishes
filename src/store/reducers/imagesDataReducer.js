// this file contain reducer part of admin LL.
import { createSlice } from "@reduxjs/toolkit";
const ImagesData = createSlice({
  name: "ImagesData",
  initialState: {
    ImagesData: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET AdminCL
    getImagesDataStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getImagesDataSuccess: (state, action) => {
      state.isFetching = false;
      state.ImagesData = action.payload;
    },
    getImagesDataFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
   
   addImagesDataStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
   addImagesDataSuccess: (state, action) => {
      state.isFetching = false;
      state.ImagesData = action.payload;
    },
   addImagesDataFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  
   
  },
});
export const {
  getImagesDataStart,
  getImagesDataFailure,
  getImagesDataSuccess,
  createImagesDataStart,
  createImagesDataSuccess,
  createImagesDataFailure,
  
  
} = ImagesData.actions;

export default ImagesData.reducer;
