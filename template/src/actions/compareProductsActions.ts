import { IComparisonProduct } from "../types/compareProducts";
import axios from "axios";
import { Action, ActionCreator, Dispatch } from "redux";
import {
  ICompareProductsState,
  ProductCategory,
} from "../reducers/compareProductsReducer";
import { ThunkResult } from "reducers/root";
import { API } from "services/api";

export enum CompareProductsActionTypes {
  FETCH_PRODUCTS = "compare/fetch_products",
  APPLY_CATEGORIES = "compare/apply_categories",
  TOGGLE_PRODUCT = "compare/toggle_product",
}

export interface IFetchProductsAction {
  type: CompareProductsActionTypes.FETCH_PRODUCTS;
  payload: IComparisonProduct[];
}

export interface ISetCategoriesAction {
  type: CompareProductsActionTypes.APPLY_CATEGORIES;
  payload: ProductCategory[];
}

export interface IToggleProductAction {
  type: CompareProductsActionTypes.TOGGLE_PRODUCT;
  payload: string;
}

export type CompareProductsAction =
  | IFetchProductsAction
  | ISetCategoriesAction
  | IToggleProductAction;

export const fetchComparisonProducts = (): ThunkResult<void> => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.get<{ products: IComparisonProduct[] }>(
        `${API}eriks/products/all`
      );

      dispatch({
        type: CompareProductsActionTypes.FETCH_PRODUCTS,
        payload: data.products || [],
      });

      // Filter categories at runtime
      const rawArray = data.products
        .reduce((res, product) => {
          res = [...res, ...Object.keys(product)];
          return res;
        }, [] as string[])
        .sort();

      // Remove duplicates and unnecessary categories (as specified in the document)
      const set = new Set(
        rawArray.filter(
          (category) =>
            ![
              "salePrice",
              "manufacturerName",
              "grossPrice",
              "BUP_UOM",
              "BUP_Value",
              "uom",
              "productImage",
              "BUP_Conversion",
              "minQuantity",
              "manufacturerImage",
              "name",
              "sku",
              "listPrice",
              "channel",
              "display",
              "atp",
            ].includes(category)
        )
      );

      dispatch({
        type: CompareProductsActionTypes.APPLY_CATEGORIES,
        payload: [...set],
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const toggleProductSelection = (sku: string): ThunkResult<void> => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CompareProductsActionTypes.TOGGLE_PRODUCT,
      payload: sku,
    });
  };
};
