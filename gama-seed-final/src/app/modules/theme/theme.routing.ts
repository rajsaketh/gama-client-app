import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemeComponent } from './page/theme.component';

import { ThemeListComponent } from './page/theme-list/theme-list.component';
import { ThemeCartComponent } from './page/theme-cart/theme-cart.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ThemeComponent,
    children: [
      {
        path: 'cart',
        component: ThemeCartComponent
      },
      {
        path: 'list',
        component: ThemeListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
