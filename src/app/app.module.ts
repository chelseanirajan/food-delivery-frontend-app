import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantListingModule } from './restaurant-listing/restaurant-listing.module';
import { FoodCatalougeModule } from './food-catalouge/food-catalouge.module';
import { OrderSummaryModule } from './order-summary/order-summary.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    RestaurantListingModule,
    FoodCatalougeModule,
    OrderSummaryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
