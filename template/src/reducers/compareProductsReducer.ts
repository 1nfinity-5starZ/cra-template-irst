import {
  CompareProductsAction,
  CompareProductsActionTypes,
} from "../actions/compareProductsActions";
import { IComparisonProduct } from "../types/compareProducts";
import produce from "immer";
import { IState } from "./root";

export type ProductCategory = keyof IComparisonProduct;

export interface ICompareProductsState {
  loadingStatus: boolean;
  products: IComparisonProduct[];
  categories: ProductCategory[];
}

export const initialCompareProductsState: ICompareProductsState = {
  loadingStatus: false,
  products: [],
  categories: [],
};

export default function compareProductsReducer(
  state: ICompareProductsState = initialCompareProductsState,
  action: CompareProductsAction
) {
  return produce(state, (draft: ICompareProductsState) => {
    let i = -1;
    switch (action.type) {
      case CompareProductsActionTypes.FETCH_PRODUCTS:
        draft.products = action.payload.map((p) => ({ ...p, selected: true }));
        break;
      case CompareProductsActionTypes.APPLY_CATEGORIES:
        draft.categories = action.payload;
        break;
      case CompareProductsActionTypes.TOGGLE_PRODUCT:
        i = draft.products.findIndex((p) => p.sku === action.payload);
        draft.products[i].selected = !draft.products[i].selected;
        break;
    }
  });
}
