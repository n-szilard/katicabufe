import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../../interfaces/category';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { apiRES } from '../../../interfaces/apiRES';
import { ApiService } from '../../../services/api.service';
import { NgForOf } from "@angular/common";
import { Traffic } from '../../../interfaces/traffic';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-trafficForm',
  standalone: true,
  imports: [NgForOf, RouterLink, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class TrafficFormComponent implements OnInit {
  private router = inject(Router);

  allCategories: Category[] = [];

  newTraffic: Traffic = {
    id: 0,
    termek: '',
    vevo: '',
    kategoriaId: 0,
    egyseg: '',
    nettoar: 0,
    mennyiseg: 0,
    kiadva: false,
    kategoriaNev: ''
  }

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.api.selectAll('categories').then((res: apiRES) => {
      this.allCategories = res.data;
    })
  }

  save() {
    console.log('asd')
  }
}
