import
{
	SELECTED_ROUTE
}
from
'./constants';

export const SelectedRoute = (payload) => ({
  type: SELECTED_ROUTE,
  payload: payload
});