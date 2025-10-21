import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { ApiService } from '../../../services/api.service';
import { apiRES } from '../../../interfaces/apiRES';
import { Customer } from '../../../interfaces/customer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customers-form',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './customers-form.component.html',
  styleUrl: './customers-form.component.scss'
})
export class CustomersFormComponent implements OnInit {
  id: number | null = null;

  private router = inject(Router);

  newCustomer: Customer = {
    id: 0,
    nev: ''
  }

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.api.select('customers', this.id).then((res: apiRES) => {
        this.newCustomer = res.data[0];
      })
    }
  }

  save() {
    if (this.newCustomer.nev == '') {
      alert('Add meg a vásárló nevét!');
      return;
    }

    if (!this.id) {
      this.api.insert('customers', this.newCustomer).then((res: apiRES) => {
        if (res.status == 200) {
          alert(res.message);
          this.newCustomer = {
            id: 0,
            nev: ''
          }
          this.router.navigate(['/customers']);
        } else {
          alert(res.message)
        }

      })
    } else {
      this.api.update('customers', this.id, this.newCustomer).then((res: apiRES) => {
        if (res.status == 200) {
          this.router.navigate(['/customers']);
        } else {
          alert(res.message)
        }
      })
    }
  }
}
