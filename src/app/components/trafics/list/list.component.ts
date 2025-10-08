import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import axios from 'axios';
import { NgForOf } from "@angular/common";

interface Traffic {
  id: Number;
  termek: string; 
  vevo: string;
  kategoriaId: number;
  egyseg: string;
  nettoar: number;
  mennyiseg: number;
  kiadva: boolean;
  kategoriaNev: string;
}

@Component({
  selector: 'app-trafficlist',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class TrafficListComponent implements OnInit{
  traffics: Traffic[] = [];
  async ngOnInit() {
    try {
      const response = await axios.get('http://localhost:3000/traffic');
      this.traffics = response.data;

    } catch (error: any) {
      console.log(error.message);
      alert('Hiba történt az adatbázis elérésekor!')
    }
  }
}
