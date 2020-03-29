import '../polyfills';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatirealModule} from './matireal/matireal.module'
import { ReactiveFormsModule } from '@angular/forms';

import {ProjectListComponent} from './project/project.list.component';
import { DialogCreateProjectComponent } from './dialog-create-project/dialog-create-project.component';
import {SidenavMenu} from './sidenav/sidenav-menu';
import {ProjectSwitch} from './project-switch/project-switch';
import {ProjectInfoComponent} from './project/project-info.component';
import { DialogCreateTaskComponent } from './dialog-create-task/dialog-create-task.component';

import {KanbanComponent} from './kanban/kanban';
import {PieChartsComponent} from './charts/pie/pie-charts';
import {ColumnChartsComponent} from './charts/column/column-charts';
import {MenuCharts} from './charts/menu-charts';
import {MainPageComponent} from './main-page/main-page';

import { from } from 'rxjs';

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule,
        BrowserAnimationsModule,
        MatirealModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        SidenavMenu,
        DialogCreateProjectComponent, 
    ],
    declarations: [ 
        SidenavMenu,
        ProjectListComponent, 
        DialogCreateProjectComponent, 
        ProjectSwitch,
        ProjectInfoComponent,
        DialogCreateTaskComponent,
        KanbanComponent,
        PieChartsComponent,
        ColumnChartsComponent,
        MenuCharts,
        MainPageComponent
    ],
    bootstrap: [
        SidenavMenu
    ]
})

export class AppModule { }