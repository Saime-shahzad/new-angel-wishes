import { configureStore } from "@reduxjs/toolkit";
import UserAuth from "./store/reducers/UserAuth";
import imagesDataReducer from "./store/reducers/imagesDataReducer";
// import AdminLLReducer from "./reducer/AdminLLReducer";



export default configureStore({
  reducer: {
    users: UserAuth,
    imageData: imagesDataReducer,
   
  },
});
