import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgForOf } from "@angular/common";
import { Category } from '../../../interfaces/category';
import { apiRES } from '../../../interfaces/apiRES';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-catlist',
  standalone: true,
  imports: [RouterLink, NgForOf, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})


export class CatListComponent implements OnInit{

  constructor(private api:ApiService) {

  }

  categories: Category[] = [];

  async ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.api.selectAll('categories').then((res:apiRES) => {
      if (res.status == 200) {
        this.categories = res.data;
      } else {
        alert(res.message);
      }
    })
  }

  delete(id: number) {
    if (window.confirm('Biztosan törlöd a kategóriát?')) {
      this.api.delete('categories', id).then((res: apiRES) =>{
        if (res.status == 200) {
          alert(res.message);
          this.getAllCategories();
        } else {
          alert()
        }
      })
    }
  }
}