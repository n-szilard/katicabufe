import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../../interfaces/category';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ApiService } from '../../../services/api.service';
import { apiRES } from '../../../interfaces/apiRES';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class CategoryFormComponent implements OnInit {

  id: number | null = null;

  private router = inject(Router);

  newCategory: Category = {
    id: 0,
    kategoriaNev: ''
  };

  allCategories: Category[] = [];

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.api.select('categories', this.id).then((res: apiRES) => {
        this.newCategory = res.data[0];
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
    if (this.newCategory.kategoriaNev == '') {
      alert('Add meg a kategória nevét!');
      return;
    }

    let idx = this.allCategories.findIndex(item => item.kategoriaNev.toLowerCase() == this.newCategory.kategoriaNev.toLowerCase());
    if (idx > -1) {
      alert('Van már ilyen nevű kategória felvéve!')
      return;
    }

    if (!this.id) {
      this.api.insert('categories', this.newCategory).then((res: apiRES) => {
        if (res.status == 200) {
          alert(res.message);
          this.newCategory = {
            id: 0,
            kategoriaNev: ''
          }
          this.router.navigate(['/categories']);
        } else {
          alert('Valami nem jo')
        }

      })
    } else {
      this.api.update('categories', this.id, this.newCategory).then((res: apiRES) => {
        if (res.status == 200) {
          alert(res.message);
          this.router.navigate(['/categories']);
        } else {
          alert('Valami nem jo')
        }
      })
    }
  }
}
