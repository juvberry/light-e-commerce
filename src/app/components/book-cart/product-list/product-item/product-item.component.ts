import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/products.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  imageUrl: string = "https://dummyjson.com/image/i/products/";
  productId:number = 0;
  imageArr:any
  imageLink = ''

  @Input()
  product!: Product;

  constructor() { }

  ngOnInit(): void {
    this.getProductId()
    this.getProductImg()
  }
  
  getProductId(){
    this.productId = this.product.id
  }

  getProductImg(){
    this.imageArr = this.product.images
    this.imageLink = this.imageArr[0]
  }
}
