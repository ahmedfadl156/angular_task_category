import { Routes } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'category/:name', component: SingleCategoryComponent },
    {
      path: 'dashboard',
      loadChildren: () =>
        import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
];
