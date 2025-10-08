import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-customers-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './customers-form.component.html',
  styleUrl: './customers-form.component.scss'
})
export class CustomersFormComponent {

}
