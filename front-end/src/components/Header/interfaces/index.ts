export interface HeaderType {
  homeButton?: boolean;
  hasCartButton?: boolean;
  hasAccountButton?: boolean;
}

interface ITotal {
  totalQuantity: number;
  items: any[];
  min_cart_value: number;
}

export interface ITotalCart {
  cart: ITotal;
}
