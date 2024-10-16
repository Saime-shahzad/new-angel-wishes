import { configureStore } from "@reduxjs/toolkit";
import UserAuth from "./store/reducers/UserAuth";
// import AdminLLReducer from "./reducer/AdminLLReducer";



export default configureStore({
  reducer: {
    Users: UserAuth,
   
  },
});
