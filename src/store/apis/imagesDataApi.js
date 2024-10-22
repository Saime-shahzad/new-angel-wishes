//this file contain all apis related to to Admin section of LL (line leader)

//importing part
// -this import is from reducer
import {
  getImagesDataStart,
  getImagesDataFailure,
  getImagesDataSuccess,
  createImagesDataStart,
  createImagesDataSuccess,
  createImagesDataFailure,
 
 
} from "../reducer/ImagesDataReducer";
// -this import is from api-routes
import {
  GET_IMAGES_DATA,
  ADD_IMAGES_DATA,
  userRequest,
} from "../../apiRouts/apiRouts";

import { toast } from "react-toastify";
import "../../App.css";


export const getUser = async (dispatch) => {
  dispatch(getImagesDataStart());
  try {
    const res = await userRequest.get(`${GET_IMAGES_DATA}`);
    dispatch(getImagesDataSuccess(res.data.payload));
    return res;
  } catch (error) {
    dispatch(getImagesDataFailure());
    return error;
  }
};

export const Registeruser = async (dispatch, inputData) => {
  dispatch(createImagesDataStart());
  try {
    const result = await userRequest.post(`${ADD_IMAGES_DATA}`, inputData);
    dispatch(createImagesDataSuccess(result));
    toast.success("Inserted Successfully");
    return result;
  } catch (err) {
    toast.error("Server Error");
    dispatch(createImagesDataFailure());
  }
};





