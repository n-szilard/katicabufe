import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
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
export class ProductsFormComponent implements OnInit {

  allCategories: Category[] = [];

  id: number | null = null;

  private router = inject(Router);


  newProduct: Product = {
    id: 0,
    termekNev: '',
    nettoAr: 0,
    egyseg: '',
    kategoriaId: 0
  }

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.api.select('products', this.id).then((res: apiRES) => {
        this.newProduct = res.data[0];
      })
    }

    this.getAllCategories();
  }

  getAllCategories() {
    this.api.selectAll('categories').then((res: apiRES) => {
      this.allCategories = res.data;
    })
  }

  save() {
    console.log(this.newProduct)

    if (!this.id) {
      this.api.insert('products', this.newProduct).then((res: apiRES) => {
        if (res.status == 200) {
          this.newProduct = {
            id: 0,
            termekNev: '',
            nettoAr: 0,
            egyseg: '',
            kategoriaId: 0
          }
          this.router.navigate(['/products']);
        } else {
          alert(res.message);
        }
      })
    } else {
      this.api.update('products', this.id, this.newProduct).then((res: apiRES) => {
        if (res.status == 200) {
          this.router.navigate(['/products']);
        } else {
          alert(res.message)
        }
      })
    }
  }
}
