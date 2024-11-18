import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { axiosInstance2 } from "../../axiosInstance";
// import axios from "axios";

export const uploadVedio = createAsyncThunk(
  "vedioMemory/uploadVedio",
  async (vedioData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance2.post("/uploadvedio", vedioData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getVedio = createAsyncThunk(
  "vedioMemory/getVedio",
  async (vedioData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/getVedio", vedioData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const uploadVedioSlice = createSlice({
  name: "vedioMemory",
  initialState: {
    vediosData: [],
    loading: false,
    error: null,
  },
  //   reducers: {
  //     uploadVedios: (state) => {
  //       state.user = null;
  //       state.token = null;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(uploadVedio.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(uploadVedio.fulfilled, (state, action) => {
      state.loading = false;
      //   state.user = action.payload.user;
      state.vediosData = action.payload.vediosData;
    });
    builder.addCase(uploadVedio.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getVedio.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getVedio.fulfilled, (state, action) => {
      state.loading = false;
      //   state.user = action.payload.user;
      state.vediosData = action.payload.vediosData;
    });
    builder.addCase(getVedio.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// export const { uploadVedios } = uploadVedioSlice.actions;
export default uploadVedioSlice.reducer;
