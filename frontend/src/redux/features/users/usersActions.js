import axios from "axios";
import { toast } from "react-toastify";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./usersTypes";

export const signUpUser = (formdata) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .post("http://localhost:5000/users/signup", formdata)
      .then((response) => {
        // response.data is the users
        // const users = response.data;
        console.log(response);
        sessionStorage.removeItem("shouldLogin");
        sessionStorage.setItem("shouldLogin", response.data.shouldLogin);
        sessionStorage.setItem("userid", response.data.UserID);
        sessionStorage.setItem("username", response.data.Username);
        toast.success(response.data.message, { theme: "dark" });
        dispatch(fetchUsersSuccess());
      })
      .catch((error) => {
        // error.message is the error message
        console.log(error);
        sessionStorage.removeItem("shouldLogin");
        toast.warn(error.response.data.message, { theme: "dark" });
        // toast.warn("check if your password includes numbers and special characters", { theme: "dark" });
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const signInUser = (formdata) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .post("http://localhost:5000/users/signin", formdata)
      .then((response) => {
        // response.data is the users
        // const users = response.data;
        console.log(response);
        // sessionStorage.removeItem("token");
        // sessionStorage.removeItem("auth");
        // sessionStorage.removeItem("userid");
        // sessionStorage.removeItem("username");
        sessionStorage.clear();
        sessionStorage.setItem("token", response.data.Token);
        sessionStorage.setItem("auth", response.data.auth);
        sessionStorage.setItem("userid", response.data.UserID);
        sessionStorage.setItem("username", response.data.Username);
        toast.success(response.data.message, { theme: "dark" });
        dispatch(fetchUsersSuccess());
      })
      .catch((error) => {
        // error.message is the error message
        console.log(error);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("auth");
        sessionStorage.removeItem("userid");
        sessionStorage.removeItem("username");
        toast.warn(error.response.data.message, { theme: "dark" });
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
