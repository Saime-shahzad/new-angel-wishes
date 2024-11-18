import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { axiosInstance2 } from "../../axiosInstance";
// import axios from "axios";

export const uploadPictures = createAsyncThunk(
  "pictureMemory/uploadPictures",
  async (picturesData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance2.post("/uploadPictures", picturesData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getPicturesData = createAsyncThunk(
  "pictureMemory/getPicturesData",
  async (picturesData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/getPicturesData", picturesData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const uploadPicturesSlice = createSlice({
  name: "pictureMemory",
  initialState: {
    picturesData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(uploadPictures.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(uploadPictures.fulfilled, (state, action) => {
      state.loading = false;
      state.picturesData = action.payload.picturesData;
    });
    builder.addCase(uploadPictures.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getVedio.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getVedio.fulfilled, (state, action) => {
      state.loading = false;
      state.picturesData = action.payload.picturesData;
    });
    builder.addCase(getVedio.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default uploadPicturesSlice.reducer;
