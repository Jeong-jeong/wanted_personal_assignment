export interface IProductList {
  listId: string;
  field: string;
  imageUrl: string;
  productList: IProductItem[];
}

export interface IProductItem {
  productId: string;
  productName: string;
  isOutside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: string | number;
  imageUrl: string;
}
