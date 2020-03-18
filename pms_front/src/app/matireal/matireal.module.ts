import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSortModule} from '@angular/material/sort';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

import { from } from 'rxjs';

const MaterialComponentsImports = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatGridListModule,
  MatPaginatorModule,
  MatTableModule
]

const MaterialComponentsExports = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatGridListModule,
  MatPaginatorModule,
  MatTableModule,
  MatDialogModule,
  MatIconModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule,
  MatSortModule
]

@NgModule({
  imports: [MaterialComponentsImports],
  exports: [MaterialComponentsExports]
})
export class MatirealModule { }
