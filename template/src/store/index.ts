import { applyMiddleware, createStore, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer, { IActions, initialState, IState } from "../reducers/root";

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<IState, IActions>))
);

export default store;
