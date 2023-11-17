import { Injectable } from '@angular/core';
import { API_URL_UD } from 'src/app/constants/url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = API_URL_UD + '/order/addOrder';

  constructor(private http: HttpClient) {}

  addOrderSummary(order: any): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }
}
