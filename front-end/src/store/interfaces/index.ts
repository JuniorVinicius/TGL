interface Items {
    id: number;
    numbers: number[];
    price: number;
    color: string;
    typeGame: string;
    typeGameId: number;
  }
  
 export interface ICart {
    items: Items[];
    totalQuantity: number;
    min_cart_value: number;
  
  }
  