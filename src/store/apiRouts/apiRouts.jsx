import axios from "axios";

export const domain =
  "https://checkyourproject.website/angle-wishes/public/api/v1/auth";

const token = localStorage.getItem("token");
export const userRequest = axios.create({
  baseURL: domain,
  headers: {
    // "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

//admin section
export const GET_USERS = domain + "user/getUsers";
export const REGISTER_USER = domain + "/register";
export const UPDATE_USER = domain + "user/updateUser";
export const DELETE_USER = domain + "user/deleteUser";
