import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodCatalougeRoutingModule } from './food-catalouge-routing.module';
import { FoodCatalougeComponent } from './component/food-catalouge.component';

@NgModule({
  declarations: [FoodCatalougeComponent],
  imports: [CommonModule, FoodCatalougeRoutingModule],
})
export class FoodCatalougeModule {}
