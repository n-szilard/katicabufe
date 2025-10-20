import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgForOf } from "@angular/common";
import { Traffic } from '../../../interfaces/traffic';
import { ApiService } from '../../../services/api.service';
import { apiRES } from '../../../interfaces/apiRES';


@Component({
  selector: 'app-trafficlist',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class TrafficListComponent implements OnInit{
    constructor(private api:ApiService) {
  
    }
  
    traffics: Traffic[] = [];
  
    async ngOnInit() {
      this.api.selectAll('traffic').then((res:apiRES) => {
        if (res.status == 200) {
          this.traffics = res.data;
        } else {
          alert(res.message);
        }
      })
    }
}
