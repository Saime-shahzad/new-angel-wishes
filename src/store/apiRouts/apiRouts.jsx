import axios from "axios";

// export const domain = "http://localhost:5000/api/";

const token = localStorage.getItem("token");
export const userRequest = axios.create({
  baseURL: domain,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

//admin section
export const GET_USERS = domain + "user/getUsers";
export const ADD_USER = domain + "user/createUser";
export const UPDATE_USER = domain + "user/updateUser";
export const DELETE_USER = domain + "user/deleteUser";

