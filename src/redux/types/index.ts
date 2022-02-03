import { IProductList } from '@types';

export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const GET_PRODUCT_LIST_SUCCESS = 'GET_PRODUCT_LIST_SUCCESS';
export const GET_PRODUCT_LIST_FAIL = 'GET_PRODUCT_LIST_FAIL';
export const UPDATE_DATASET = 'UPDATE_DATASET';

export interface productListFailDispatch {
  type: typeof GET_PRODUCT_LIST_FAIL;
}

export interface productListSuccessDispatch {
  type: typeof GET_PRODUCT_LIST_SUCCESS;
  payload: IProductList;
}

export interface UpdateDataSetProps {
  clickedId: number;
  clickedSwipeIndex: number;
}
export interface productDatasetDispatch {
  type: typeof UPDATE_DATASET;
  payload: UpdateDataSetProps;
}

export type productListDispatchType =
  | productListFailDispatch
  | productListSuccessDispatch
  | productDatasetDispatch;
