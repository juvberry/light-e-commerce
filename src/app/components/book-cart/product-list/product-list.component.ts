import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './model/products.model';
import { ProductsService } from '../../../services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsArr: any;
  productsService: ProductsService;
  product: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  }

  constructor( productsService: ProductsService ) {
    this.productsService = productsService;
   }

  ngOnInit(): void {
    this.getProductsArr()
  }

  getProductsArr(){
    this.productsService.getProducts().subscribe(products => {
      this.productsArr = products.products;
      console.log(this.productsArr);
    })
  }

  getProduct(){
    this.productsArr.forEach((element: Product) => {
      this.product = element
      return this.product
    });
  }
}


