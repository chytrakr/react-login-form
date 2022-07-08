import { API } from "./settings";
import axios from "axios";
import {
  SignIn,
  SignOut,
  SigninLoading,
  SignInFail,
  AuthStatus,
  SetActionPermissions,
} from "../store/actions/index";
import { SelectedRoute } from "../store/actions/common";

import api from "./base";
import { GOOGLE_LOGIN_API } from "./apis";

// Login api
export function LoginAPI(e, username, password) {
  e.preventDefault();
  return function (dispatch) {
    username = username.toUpperCase();
    dispatch(SigninLoading(true));
    const requestOptions = {
      url: API + "account/login/",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { username, password, source: "Web" },
    };

    // login http post call
    // axios(requestOptions)
    //   	.then(function (response) {
    //         let user_id = response.data.user_id;
    // 		localStorage.setItem('token', response.data.auth_token);
    // 		localStorage.setItem('user_id', user_id);
    // 		statusAPI()(dispatch);
    //   	})
    // 	.catch(function (error) {
    // 		if (error.message === 'Network Error') {
    // 			dispatch(SignInFail(true, ["Check your internet connection"]));
    // 		} else {
    // 			dispatch(SignInFail(true, [error.response.data.message]));
    // 		}
    // 		dispatch(SigninLoading(false));
    // 		setTimeout(()=>dispatch(SignInFail(false, [])), 3000);
    // 	});
    localStorage.setItem("token", "response.data.auth_token");
    localStorage.setItem("user_id", "Chytra");
    dispatch(SignIn({}));
    dispatch(AuthStatus(true));
  };
}

export function GoogleLoginAPI(token, setGoogleLoginLoading, logout) {
  return function (dispatch) {
    // dispatch(SigninLoading(true));
    const requestOptions = {
      url: GOOGLE_LOGIN_API,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: {},
    };
    // login http post call
    axios(requestOptions)
      .then(function (response) {
        console.log(response);
        if (response.data.statusCode === 200) {
          localStorage.setItem("token", response.data.body.data.token);
          localStorage.setItem(
            "user_id",
            response.data.body.data.employee_code
          );
          dispatch(SignIn({}));
          dispatch(AuthStatus(true));
          // dispatch(SigninLoading(false));
        } else {
          if (response.data.statusCode === 401) {
            dispatch(SignInFail(true, ["Unauthorised access"]));
          } else {
            dispatch(SignInFail(true, [response.data.body.message]));
          }
          // dispatch(SigninLoading(false));
          setTimeout(() => dispatch(SignInFail(false, [])), 3000);
        }
        setGoogleLoginLoading(false);
        setTimeout(() => {
          logout();
        }, 3000);
      })
      .catch(function (error) {
        setGoogleLoginLoading(false);
        if (error.message === "Network Error") {
          dispatch(SignInFail(true, ["Check your internet connection"]));
        } else {
          dispatch(SignInFail(true, [error.response.data.message]));
        }
        dispatch(SigninLoading(false));
        setTimeout(() => dispatch(SignInFail(false, [])), 3000);
        setTimeout(() => {
          logout();
        }, 3000);
      });
  };
}

// Login api
export function LogoutAPI() {
  return function (dispatch) {
    localStorage.setItem("token", "");
    localStorage.setItem("user_id", "");
    dispatch(SetActionPermissions([]));
    dispatch(SignOut());
    dispatch(SelectedRoute("/send-sms"));
  };
}

// authentication checking api
export function statusAPI() {
  return function (dispatch) {
    let user_id = localStorage.getItem("user_id");
    let token = localStorage.getItem("token");
    if (user_id && token) {
      dispatch(SignIn({ user_id: user_id, token: token }));
      dispatch(AuthStatus(true));
    }
  };
}
