import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slideOpts = {
    initialSlide: 0,
    speed: 2000,
    autoplay:{
      delay:2000,
      loop:"true",
    }
  };
}
