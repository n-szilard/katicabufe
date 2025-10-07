import { Routes } from '@angular/router';
import { CatListComponent } from './components/categories/list/list.component';
import { TrafficListComponent } from './components/trafics/list/list.component';
import { TrafficFormComponent } from './components/trafics/form/form.component';
import { CategoryFormComponent } from './components/categories/form/form.component';

export const routes: Routes = [
    {
        path: 'categories',
        component: CatListComponent
    },
    {
        path: 'trafics',
        component: TrafficListComponent
    },
    {
        path: 'trafficform',
        component: TrafficFormComponent
    },
    {
        path: 'categoryform',
        component: CategoryFormComponent
    }
];
