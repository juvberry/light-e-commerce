import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from "../components/book-cart/product-list/model/products.model";
import { Observable } from "rxjs";

@Injectable()


export class ProductsService {

  private url = 'https://dummyjson.com/products';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor( private http: HttpClient ){}

    getProducts():Observable<any> {
      return this.http.get(this.url)
    }

    getCategories():Observable<any>{
      return this.http.get(this.url + '/categories')
    }

}