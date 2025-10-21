import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Category } from '../../interfaces/category';
import { ApiService } from '../../services/api.service';
import { apiRES } from '../../interfaces/apiRES';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-arlista',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './arlista.component.html',
  styleUrl: './arlista.component.scss'
})
export class ArlistaComponent implements OnInit {
  pricelist: any = [];

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.api.selectAll('pricelist').then((res:apiRES) => {
      if (res.status == 200) {
        this.pricelist = res.data;
      } else {
        alert(res.message);
      }
    })
  }
}
