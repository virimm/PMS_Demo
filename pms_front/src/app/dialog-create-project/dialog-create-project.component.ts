import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Project} from '../project/project.list.component'
import {FormControl, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MatInput} from '@angular/material/input';

import { from } from 'rxjs';

@Component({
  selector: 'dialog-create-project',
  templateUrl: './dialog-create-project.component.html',
  styleUrls: ['./dialog-create-project.component.css']
})

export class DialogCreateProjectComponent implements OnInit {
  selectFormControl = new FormControl('', Validators.required);
  disabled: boolean = true;
  isClickBtnCreateProject: boolean;
  minDateEnd: Date;

  resources: string[] = ['Serg', 'Tanya', 'Kolya'];

  @ViewChild('inputEnd', {
    read: MatInput
  }) inputEnd: MatInput;

  @ViewChild('inputStart', {
    read: MatInput
  }) inputStart: MatInput;

  constructor( public dialogRef: MatDialogRef<DialogCreateProjectComponent>, @Inject(MAT_DIALOG_DATA) public data: Project) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {}

  addEventStart(type: string, event: MatDatepickerInputEvent<Date>) {
    if(event.value) {
      this.disabled = false;
      this.minDateEnd = event.value;
    } else {
      this.disabled = true;
      this.inputEnd.value = '';
    }

  }

  closeDialog() {
    this.isClickBtnCreateProject = false;
    this.dialogRef.close(this.isClickBtnCreateProject);
  }

  substractDate(dateStart, dateEnd) {
    const diffTime = Math.abs(dateEnd - dateStart);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  }

  createNewProject() {
    if(this.data.name && this.data.resource && this.inputEnd.value && this.inputStart.value) {
      this.data.startDate = this.inputStart.value.toLocaleString();
      this.data.endDate = this.inputEnd.value.toLocaleString();
      this.data.duration = this.substractDate(this.inputEnd.value, this.inputStart.value);
      this.isClickBtnCreateProject = true;
      this.dialogRef.close(this.isClickBtnCreateProject);
    }
  }

}
