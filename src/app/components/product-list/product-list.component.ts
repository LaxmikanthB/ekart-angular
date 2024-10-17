import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  // name : string = 'i phone 13';
  // price : number = 999;
  // color : string = 'red';
  // discount : number = 8.5;

  product = {
    name : 'IPHONE 16',
    price : 999,
    color : 'Green',
    discount : 8.5,
    inStock : 10,
    pImage : '../../../assets/images/iphone.png'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount /100);
  }
}
