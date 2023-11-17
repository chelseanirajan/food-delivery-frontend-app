import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodCatalougeComponent } from '../food-catalouge/component/food-catalouge.component';
import { RestaurantListingComponent } from './component/restaurant-listing.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantListingComponent,
  },
  {
    path: 'food-item/:id',
    component: FoodCatalougeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantListingRoutingModule {}
