import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductsService } from '../../../services/product-list.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  categoryList:[] = []
  categories = new FormControl('')

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.productService.getCategories().subscribe(res => {
      this.categoryList = res
    })
  }

  filterCategory(){
    this.categoryList
  }
}
