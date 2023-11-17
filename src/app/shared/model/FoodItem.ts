export interface FoodItem {
  id?: number;
  itemName?: string;
  itemDescription?: string;
  price: number;
  restaurantId?: number;
  isVeg?: boolean;
  quantity: number;
}
