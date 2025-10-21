import { Routes } from '@angular/router';
import { CatListComponent } from './components/categories/list/list.component';
import { TrafficListComponent } from './components/trafics/list/list.component';
import { TrafficFormComponent } from './components/trafics/form/form.component';
import { CategoryFormComponent } from './components/categories/form/form.component';
import { ProductsFormComponent } from './components/products/products-form/products-form.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { CustomersFormComponent } from './components/customers/customers-form/customers-form.component';
import { ArlistaComponent } from './components/arlista/arlista.component';

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
    },
    {
        path: 'categoryform/:id',
        component: CategoryFormComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'productsform',
        component: ProductsFormComponent
    },
    {
        path: 'customers',
        component: CustomersListComponent
    },
    {
        path: 'customersform',
        component: CustomersFormComponent
    },
    {
        path: 'prices',
        component: ArlistaComponent
    },
    {
        path: 'productsform/:id',
        component: ProductsFormComponent
    },
    {
        path: 'customersform/:id',
        component: CustomersFormComponent
    }
];
