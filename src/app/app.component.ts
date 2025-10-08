import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { StatComponent } from "./components/stat/stat.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TrafficListComponent} from "./components/trafics/list/list.component";
import { CatListComponent} from './components/categories/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    StatComponent,
    FooterComponent,
    TrafficListComponent,
    CatListComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  appTitle = 'Katica Büfé App';
  company = 'Bajai SZC Türr István Technikum';
  author = 'Nagyapáti Szilárd 13.A'
}
