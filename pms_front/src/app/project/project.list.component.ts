import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { DialogCreateProjectComponent } from '../dialog-create-project/dialog-create-project.component';
import { ProjectSwitch } from '../project-switch/project-switch';

@Component({
    selector: 'main-project-list',
    styleUrls: ['project.list.component.css'],
    templateUrl: 'project.list.component.html'
})

export class ProjectListComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'resource', 'startDate', 'endDate', 'duration', 'complete', 'menu'];

    dataSource = new MatTableDataSource<Project>(ELEMENT_DATA);

    name: string;
    resource: string;
    newProject: Project;
    filterData: string;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    @Input() projectSwitch: ProjectSwitch;

    constructor(public dialog: MatDialog) {}

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    cleanFilter() {
        this.filterData = "";
        this.dataSource = new MatTableDataSource<Project>(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openDialog() {
        this.newProject = new Project();
        const dialogRef = this.dialog.open(DialogCreateProjectComponent, {
            width: '500px',
            data: this.newProject
          });
      
          dialogRef.afterClosed().subscribe(result => {
            if(result) {
                this.addNewProject();
                console.log('The dialog was closed, and create new project');
            }
          });
    }

    addNewProject() {
        this.newProject.position = this.calculatePosition(ELEMENT_DATA);
        ELEMENT_DATA.push(this.newProject);
        this.dataSource = new MatTableDataSource<Project>(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
    }

    calculatePosition(arr) {
        const lastPos = arr[arr.length - 1].position;
        return lastPos + 1;
    }

    openInfoProject(element) {
        this.projectSwitch.selectProject = element;
        this.projectSwitch.isShowInfoProject = true;
    }
}

export class Project {
    id: number;
    position: number;
    name: string;
    resource: string;
    startDate: string;
    endDate: string;
    duration: number;
    complete: number;
}

const ELEMENT_DATA: Project[] = [
    {id: 1, position: 1, name: 'Project 1', resource: "Serg", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 40},
    {id: 2, position: 2, name: 'Project 2', resource: "Kolya", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 51},
    {id: 3, position: 3, name: 'Project 3', resource: "Tanya", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 60},
    {id: 4, position: 4, name: 'Project 4', resource: "Kol", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 70},
    {id: 5, position: 5, name: 'Project 5', resource: "Vit", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 80},
    {id: 6, position: 6, name: 'Project 6', resource: "Boy", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 55},
    {id: 7, position: 7, name: 'Project 7', resource: "San", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 60},
    {id: 8, position: 8, name: 'Project 8', resource: "Best", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 48},
    {id: 9, position: 9, name: 'Project 9', resource: "All", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 90},
    {id: 10, position: 10, name: 'Project 10', resource: "Kolya1", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 65},
    {id: 11, position: 11, name: 'Project 11', resource: "Nata", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 70},
    {id: 12, position: 12, name: 'Project 12', resource: "Sveta", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 42},
    {id: 13, position: 13, name: 'Project 13', resource: "Kiril", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 43},
    {id: 14, position: 14, name: 'Project 14', resource: "Kolya3", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 50},
    {id: 15, position: 15, name: 'Project 15', resource: "Son", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 20},
    {id: 16, position: 16, name: 'Project 16', resource: "Bell", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 22},
    {id: 17, position: 17, name: 'Project 17', resource: "Wish", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 90},
    {id: 18, position: 18, name: 'Project 18', resource: "Zoya", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 31},
    {id: 19, position: 19, name: 'Project 19', resource: "Miss", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 20},
    {id: 20, position: 20, name: 'Project 20', resource: "Serg1", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 40}
];
