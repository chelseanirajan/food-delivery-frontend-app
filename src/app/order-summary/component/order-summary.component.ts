import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDTO } from '../model/OrderDTO';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent {
  isDialog: boolean = false;
  obj: any;
  orderSummary?: OrderDTO;
  total: any;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}
  ngOnInit() {
    const data = this.route.snapshot.queryParams['data'];
    console.log('data', data);
    this.obj = JSON.parse(data);
    this.obj.userId = 1;
    this.orderSummary = this.obj;
    this.total = this.orderSummary?.foodItemList?.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.quantity * currentValue.price;
      },
      0
    );
  }

  hideDialog() {
    this.router.navigate(['/']);
    this.isDialog = false;
  }
  showDialog() {
    this.orderService.addOrderSummary(this.orderSummary).subscribe(
      (data) => {
        this.isDialog = true;
      },
      (error) => {
        console.log(error.messgae);
      }
    );
  }
  placeOrder() {}
}
