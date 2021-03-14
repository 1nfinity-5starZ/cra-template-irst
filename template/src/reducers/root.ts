import { combineReducers } from "redux";
import { CompareProductsAction } from "../actions/compareProductsActions";
import comparisonReducer, {
  ICompareProductsState,
  initialCompareProductsState,
} from "./compareProductsReducer";
import { ThunkAction } from "redux-thunk";

export interface IState {
  comparison: ICompareProductsState;
}

export const initialState: IState = {
  comparison: initialCompareProductsState,
};

export type IActions = CompareProductsAction;

export type ThunkResult<R> = ThunkAction<R, IState, {}, IActions>;

export default combineReducers({
  comparison: comparisonReducer,
});
