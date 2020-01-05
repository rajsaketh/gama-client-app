import { NgModule } from '@angular/core';

import { MyModalComponent } from './modal/my-modal.component';

import { ThemeComponent } from './page/theme.component';
import { HomeRoutingModule } from './home.routing';

import { SharedModule } from '@shared/shared.module';
import { ProjectItemComponent } from './page/project-item/project-item.component';
import { ThemeListComponent } from './page/theme-list/theme-list.component';

@NgModule({
    declarations: [
        ThemeListComponent,
        MyModalComponent,
        ProjectItemComponent,
      
    ],
    imports: [
        SharedModule,

        HomeRoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: [MyModalComponent]
})
export class ThemeModule {}
