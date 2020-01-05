import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectResolver } from './project-resolver.service';
import { ThemeComponent } from './page/theme.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
import { ThemeListComponent } from './page/theme-list/theme-list.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'theme',
    pathMatch: 'full'
  },
  {
    path: 'theme',
    component: ThemeComponent,
    
  },
  {
    path: 'projects/:id',
    component: ThemeListComponent,
    resolve: {
      project: ProjectResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
