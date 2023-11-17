import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/shared/model/Restaurant';
import { RestaurantService } from '../service/restaurant.service';
import { Router } from '@angular/router';
import { min } from 'rxjs';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css'],
})
export class RestaurantListingComponent {
  public restaurantList: Restaurant[];
  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) {}
  ngOnInit() {
    this.restaurantService.getAllRestaruantList().subscribe((data) => {
      this.restaurantList = data;
    });
  }
  onOrderClick(id: number) {
    this.router.navigate(['/food-item/', id]);
  }

  getRandomPic(): string {
    let index = Math.floor(Math.random() * 8) + 1;
    return `${index}.jpg`;
  }
}
