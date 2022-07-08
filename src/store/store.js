import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";
function configureStore(state = {}) {
  return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;