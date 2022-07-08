import { SELECTED_ROUTE } from "../actions/constants";

const initState = {
  selectedRoute: "/send-sms",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SELECTED_ROUTE:
      if (action.payload !== "/") {
        return {
          ...state,
          selectedRoute: action.payload,
        };
      } else return state;
    default:
      return state;
  }
};

export default reducer;
