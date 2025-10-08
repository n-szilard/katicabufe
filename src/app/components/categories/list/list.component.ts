import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import axios, { AxiosError } from 'axios';
import { CommonModule, NgForOf } from "@angular/common";

interface Category {
  id: number;
  kategoriaNev: string;
}

@Component({
  selector: 'app-catlist',
  standalone: true,
  imports: [RouterLink, NgForOf, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})


export class CatListComponent implements OnInit{

  categories: Category[] = [];

  async ngOnInit() {
    try {
      const response = await axios.get('http://localhost:3000/categories');
      this.categories = response.data;

    } catch (error: any) {
      console.log(error.message);
      alert('Hiba történt az adatbázis elérésekor!')
    }
  }
}