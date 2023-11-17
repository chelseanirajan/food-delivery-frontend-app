import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError, catchError } from 'rxjs';
import { API_URL_FC } from 'src/app/constants/url';

@Injectable({
  providedIn: 'root',
})
export class FoodCatalougeService {
  private apiUrl = API_URL_FC + '/food-item/fetch-food-by-restaurant/';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  getFooodItemByRestaurant(restuarantId: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl + restuarantId}`)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: any) {
    return throwError(error.message || error);
  }
}
