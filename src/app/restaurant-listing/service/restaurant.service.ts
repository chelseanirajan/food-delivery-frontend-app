import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL_RL } from 'src/app/constants/url';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiURL = API_URL_RL + '/restaurant/fetchAllRestaurant';

  constructor(private http: HttpClient) {}

  getAllRestaruantList(): Observable<any> {
    return this.http.get<any>(this.apiURL).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    return throwError(error.message || error);
  }
}
