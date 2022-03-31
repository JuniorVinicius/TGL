interface ICart {
    items: any[];
    min_cart_value: number;

}
  
export interface ICartItems {
    cart: ICart;
}