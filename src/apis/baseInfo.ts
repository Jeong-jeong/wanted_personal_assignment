import url from './urls';
import { IProductList } from '@types';
import request from './axios';

export const getProductList = (): Promise<IProductList> =>
  request.get(url.imageInfo);
