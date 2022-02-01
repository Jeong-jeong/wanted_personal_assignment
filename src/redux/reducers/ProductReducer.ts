import { IProductList } from '@types';
import {
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  UPDATE_ACTIVED_ID,
  productListDispatchType,
} from '@redux/types';

interface InitialState {
  success: boolean;
  productList?: IProductList;
  activedId?: number;
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
    case UPDATE_ACTIVED_ID:
      return {
        ...state,
        activedId: action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducer;
