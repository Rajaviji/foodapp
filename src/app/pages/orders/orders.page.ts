import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor() { }
  public currentNumber = 0;
  ngOnInit() {
  }
  public increment () {
    this.currentNumber++;
  }
  
  public decrement () {
    this.currentNumber--;
  }
}
