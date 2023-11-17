import { FoodItem } from 'src/app/shared/model/FoodItem';
import { Restaurant } from 'src/app/shared/model/Restaurant';

export interface OrderDTO {
  orderId?: number;
  foodItemList?: FoodItem[];
  restaurant?: Restaurant;
  userId?: number;
}
