import { IProductList } from '@types';
import {
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  UPDATE_DATASET,
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
        productList: { ...action.payload, activedId: 0 },
      };
    case GET_PRODUCT_LIST_FAIL:
      return {
        ...state,
        success: false,
      };
    case UPDATE_DATASET: {
      // @NOTE: activedId와 swipeIndex를 업데이트 하는 로직
      const parsedValue = getStorageValue(getProductListKey, {});
      const { clickedId, clickedSwipeIndex } = action.payload;
      return {
        ...state,
        success: true,
        productList: {
          ...parsedValue,
          clickedSwipeIndex,
          activedId: checkSameId(state.productList?.activedId, clickedId)
            ? 0
            : clickedId,
        },
      };
    }
    default:
      return state;
  }
};

export default ProductReducer;
