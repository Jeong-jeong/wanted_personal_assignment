import { IProductList } from '@types';
import {
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  UPDATE_ACTIVED_ID,
  productListDispatchType,
} from '@redux/types';
import { getProductListKey } from '@utils/constants';
import { getStorageValue, checkSameId } from '@utils/functions';

interface InitialState {
  success: boolean;
  productList?: IProductList;
}

const initialState: InitialState = {
  success: false,
};

const ProductReducer = (
  state = initialState,
  action: productListDispatchType
): InitialState => {
  switch (action.type) {
    case GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        success: true,
        productList: { ...action.payload },
      };
    case GET_PRODUCT_LIST_FAIL:
      return {
        ...state,
        success: false,
      };
    case UPDATE_ACTIVED_ID: {
      const parsedValue = getStorageValue(getProductListKey, {});

      return {
        ...state,
        success: true,
        productList: {
          ...parsedValue,
          activedId: checkSameId(state.productList?.activedId, action.payload)
            ? 0
            : action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default ProductReducer;
