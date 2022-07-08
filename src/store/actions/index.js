
export const SignIn = (current={}) => ({
  type: 'SIGN_IN',
  payload: current
})

export const SignInFail = (status, message) => ({
  type: 'SIGN_IN_FAIL',
  payload: {status, message}
})

export const SignOut = () => ({
  type: 'SIGN_OUT',
  payload: false
})

export const SigninLoading = (payload=false) => ({
  type: 'SIGN_IN_LOADING',
  payload: payload
})

export const AuthStatus = (payload=false) => ({
  type: 'AUTH_STATUS',
  payload: payload
})

export const SetActionPermissions = (payload) => ({
  type: 'SET_ACTION_PERMISSIONS',
  payload: payload
})