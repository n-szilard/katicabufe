import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Customer } from '../../../interfaces/customer';
import { ApiService } from '../../../services/api.service';
import { apiRES } from '../../../interfaces/apiRES';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss'
})
export class CustomersListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.getCustomers();
  }


  getCustomers() {
    this.api.selectAll('customers').then((res: apiRES) => {
      if (res.status == 200) {
        this.customers = res.data;
      } else {
        alert(res.message);
      }
    })
  }

  delete(id: number) {
    if (window.confirm('Biztosan törlöd a vásárlót?')) {
      this.api.delete('customers', id).then((res: apiRES) =>{
        if (res.status == 200) {
          alert(res.message);
          this.getCustomers();
        } else {
          alert(res.message)
        }
      })
    }
  }
}
