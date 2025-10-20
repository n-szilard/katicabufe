import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Category } from '../../../interfaces/category';
import { ApiService } from '../../../services/api.service';
import { apiRES } from '../../../interfaces/apiRES';
import { Product } from '../../../interfaces/product';
import { FormsModule } from '@angular/forms'
import { NgForOf } from "@angular/common";


@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [RouterLink, FormsModule, NgForOf],
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.scss'
})
export class ProductsFormComponent implements OnInit{

  allCategories: Category[] = [];

  newProduct: Product = {
    id:0,
    termekNev: '',
    nettoAr: 0,
    egyseg: '',
    kategoriaId: 0
  }

  constructor(private api:ApiService) {
    
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.api.selectAll('categories').then((res: apiRES) => {
      this.allCategories = res.data;
    })
  }

  save() {
    console.log(this.newProduct)
    this.api.insert('products', this.newProduct).then((res:apiRES) => {
      if (res.status == 200) {
        this.newProduct = {
          id: 0,
          termekNev: '',
          nettoAr: 0,
          egyseg: '',
          kategoriaId: 0
        }
      } else {
        alert(res.message);
      }
    })
  }
}
