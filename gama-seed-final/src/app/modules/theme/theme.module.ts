import { NgModule } from '@angular/core';

import { MyModalComponent } from './modal/my-modal.component';

import { ThemeComponent } from './page/theme.component';
import { ThemeRoutingModule } from './theme.routing';

import { SharedModule } from '@shared/shared.module';
import { ProjectItemComponent } from './page/project-item/project-item.component';
import { ThemeListComponent } from './page/theme-list/theme-list.component';
import { ThemeCartComponent } from './page/theme-cart/theme-cart.component';
//import { ThemeComponent } from './page/theme/theme.component';

@NgModule({
  declarations: [
    ThemeListComponent,
    MyModalComponent,
    ProjectItemComponent,
    ThemeCartComponent,
    ThemeComponent
  ],
  imports: [SharedModule, ThemeRoutingModule],
  exports: [],
  providers: [],
  entryComponents: [MyModalComponent]
})
export class ThemeModule {}
