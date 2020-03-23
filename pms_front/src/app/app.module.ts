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
    ],
    bootstrap: [
        SidenavMenu
    ]
})

export class AppModule { }