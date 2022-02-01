import { IProductList } from '@types';

export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const GET_PRODUCT_LIST_SUCCESS = 'GET_PRODUCT_LIST_SUCCESS';
export const GET_PRODUCT_LIST_FAIL = 'GET_PRODUCT_LIST_FAIL';
export const UPDATE_ACTIVED_ID = 'UPDATE_ACTIVED_ID';

export interface productListFailDispatch {
  type: typeof GET_PRODUCT_LIST_FAIL;
}

export interface productListSuccessDispatch {
  type: typeof GET_PRODUCT_LIST_SUCCESS;
  payload: IProductList;
}
export interface productIdDispatch {
  type: typeof UPDATE_ACTIVED_ID;
  payload: number;
}

export type productListDispatchType =
  | productListFailDispatch
  | productListSuccessDispatch
  | productIdDispatch;
