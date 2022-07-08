import
{
  UPDATE_NOTIFY
}
from
'../actions/constants';

const initState = {
  open: false,
  msgs: [],
  variant: 'success'
}

const reducer = (state=initState, action) => {
	switch (action.type) {
    case UPDATE_NOTIFY:
      return {
        ...state,
        open: action.payload.open,
        msgs: action.payload.msgs
      };
    default:
      return state
  }
}


export default reducer;
