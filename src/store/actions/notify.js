import
{
	UPDATE_NOTIFY
}
from
'./constants';

export const UpdateNotify = (payload) => ({
  type: UPDATE_NOTIFY,
  payload: payload
});
