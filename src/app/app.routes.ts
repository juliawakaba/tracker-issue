import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details'
      },
      { path:"login", component: AuthComponent, title:'login' },
    ];
