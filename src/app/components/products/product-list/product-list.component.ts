import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { apiRES } from '../../../interfaces/apiRES';
import { Product } from '../../../interfaces/product';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{

  constructor(private api:ApiService) {

  }

  products: Product[] = []

  async ngOnInit(){
    this.api.selectAll('products').then((res: apiRES) => {
      if (res.status == 200) {
        this.products = res.data;
      } else {
        alert(res.message);
      }
    })
  }
}
