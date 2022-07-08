const initState = {
  auth: false,
  isLoggedIn: false,
  loading: false,
  signInFail: false,
  signInFailMsg: [],
  current: {},
  actionPermissions: []
};

const login = (state=initState, action) => {
	switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        current: action.payload
      };
    case 'SIGN_IN_FAIL':
      return {
        ...state,
        signInFail: action.payload.status,
        signInFailMsg: action.payload.message
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isLoggedIn: action.payload
      };
    case 'SIGN_IN_LOADING':
    	return {
        ...state,
        loading: action.payload
      };
    case 'AUTH_STATUS':
      return {
        ...state,
        auth: action.payload
      };
    case 'SET_ACTION_PERMISSIONS':
      return {
        ...state,
        actionPermissions: action.payload
      };
    default:
      return state
  }
};


export default login;
