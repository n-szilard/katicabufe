import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.scss'
})
export class ProductsFormComponent {

}
