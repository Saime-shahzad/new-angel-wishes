//this file contain all apis related to to Admin section of LL (line leader)

//importing part
// -this import is from reducer
import {
  getUserAuthStart,
  getUserAuthFailure,
  getUserAuthSuccess,
  createUserAuthStart,
  createUserAuthSuccess,
  createUserAuthFailure,
  updateUserAuthStart,
  updateUserAuthSuccess,
  updateUserAuthFailure,
 
} from "../reducer/UserAuthReducer";
// -this import is from api-routes
import {
  GET_USER_AUTH,
  UPDATE_USER_AUTH,
  ADD_USER_AUTH,
  userRequest,
} from "../../apiRouts/apiRouts";

import { toast } from "react-toastify";
import "../../App.css";

//this function has API call in which it get all Question from UserAuth

export const getUser = async (dispatch) => {
  dispatch(getUserAuthStart());
  try {
    const res = await userRequest.get(`${GET_USER_AUTH}`);
    dispatch(getUserAuthSuccess(res.data.payload));
    return res;
  } catch (error) {
  
    dispatch(getUserAuthFailure());
    return error;
  }
};

export const Registeruser = async (dispatch, inputData) => {
  dispatch(createUserAuthStart());
  try {
    const result = await userRequest.post(`${ADD_USER_AUTH}`, inputData);
    dispatch(createUserAuthSuccess(result));
    toast.success("Inserted Successfully");
    return result;
  } catch (err) {
    toast.error("Server Error");
    dispatch(createUserAuthFailure());
  }
};

export const updateUsers = async (userData, dispatch) => {
  dispatch(updateUserAuthStart());
  // // console.log("userData >>>", userData);
  try {
    const res = await userRequest.post(`${UPDATE_USER_AUTH}`, userData);
    dispatch(updateUserAuthSuccess(res.data));
    toast.success("Updtaed Successfully");
    return res;
  } catch (error) {
    dispatch(updateUserAuthFailure());
    toast.error("Server Error");
    return error;
  }
};



