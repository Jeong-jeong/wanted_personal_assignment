export interface IProductList {
  id: number;
  activedId: number;
  imageUrl: string;
  productList: IProductItem[];
}

export interface IProductListProps {
  storedValue: IProductList;
}

export interface IProductItem {
  productId: number;
  productName: string;
  imageUrl: string;
  priceOriginal: number;
  priceDiscount: number;
  pointX: number;
  pointY: number;
  outside: boolean;
  discountRate: number;
}
