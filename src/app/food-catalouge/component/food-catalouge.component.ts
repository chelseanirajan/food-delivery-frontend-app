import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FoodCataloguePage } from 'src/app/shared/model/FoodCataloguePage';
import { FoodCatalougeService } from '../service/food-catalouge.service';
import { FoodItem } from 'src/app/shared/model/FoodItem';
import { JsonPipe } from '@angular/common';
import { Restaurant } from 'src/app/shared/model/Restaurant';

@Component({
  selector: 'app-food-catalouge',
  templateUrl: './food-catalouge.component.html',
  styleUrls: ['./food-catalouge.component.css'],
})
export class FoodCatalougeComponent {
  restaurantId: number;
  foodItemResponse: FoodCataloguePage;
  footItemList: FoodItem[] = [];
  orderSummary: FoodCataloguePage;
  constructor(
    private route: ActivatedRoute,
    private foodItemService: FoodCatalougeService,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam !== null && idParam !== undefined) {
        this.restaurantId = +idParam;
      }
    });
    console.log(this.restaurantId);
    this.foodItemService
      .getFooodItemByRestaurant(this.restaurantId)
      .subscribe((data) => {
        this.foodItemResponse = data;
      });
  }
  onDecrement(food: any) {
    if (food.quantity > 0) {
      food.quantity--;
      let index = this.footItemList.findIndex((item) => item.id === food.id);
      if (this.footItemList[index].quantity === 0) {
        this.footItemList.splice(index, 1);
      } else {
        this.footItemList[index] = food;
      }
    }
  }
  onIncrement(food: any) {
    food.quantity++;
    let index = this.footItemList.findIndex((item) => item.id === food.id);
    if (index === -1) {
      this.footItemList.push(food);
    } else {
      this.footItemList[index] = food;
    }
  }
  onCheckout() {
    console.log('hello order summary click');
    this.orderSummary = {
      foodItemList: [],
      restaurant: undefined,
    };
    this.orderSummary.foodItemList = this.footItemList;
    this.orderSummary.restaurant = this.foodItemResponse.restaurant;

    this.router.navigate(['/orderSummary'], {
      queryParams: { data: JSON.stringify(this.orderSummary) },
    });
  }
}
