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
    // // // console.log("response from get DH admin ==>", res);
    dispatch(getUserAuthSuccess(res.data.payload));
    return res;
  } catch (error) {
    // // console.log("error from UserFailure >>>", error);
    // toast.error(<div> &nbsp; Server Error </div>);
    dispatch(getUserAuthFailure());
    return error;
  }
};

//this function has API call in which you can create or add question for admin LL
export const Registeruser = async (dispatch, inputData) => {
  dispatch(createUserAuthStart());
  try {
    // // console.log("result from createQuestionSH fnction", inputData);
    const result = await userRequest.post(`${ADD_USER_AUTH}`, inputData);
    dispatch(createUserAuthSuccess(result));
    toast.success("Inserted Successfully");
    return result;
  } catch (err) {
    // // console.log("error from catch", err);
    toast.error("Server Error");
    dispatch(createUserAuthFailure());
  }
};

//this function has API call in which you can update question from admin LL
export const updateUsers = async (userData, dispatch) => {
  dispatch(updateUserAuthStart());
  // // console.log("userData >>>", userData);
  try {
    const res = await userRequest.post(`${UPDATE_USER_AUTH}`, userData);
    // console.log("response from updtae defect handling question", res);
    dispatch(updateUserAuthSuccess(res.data));
    toast.success("Updtaed Successfully");
    return res;
  } catch (error) {
    // // console.log("error from catch block", error);
    dispatch(updateUserAuthFailure());
    toast.error("Server Error");
    return error;
  }
};
//this function has API call in which you can delete question from admin LL



