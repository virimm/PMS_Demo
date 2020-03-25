import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { DialogCreateProjectComponent } from '../dialog-create-project/dialog-create-project.component';
import { ProjectSwitch } from '../project-switch/project-switch';
import { id } from '../jsgant/lang';

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
    tasks: Array<Task>;
}

export class Task {
    pID: number;
    pParent: number;
    pName: string;
    pRes: string;
    pStart: string;
    pEnd: string;
    pClass: string;
}

const Tasks: Task[] = [
    {pID: 11, pParent: 1, pName: 'Task 1', pRes: "Serg", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 2, pParent: 1, pName: 'Task 2', pRes: "Kolya", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 3, pParent: 1, pName: 'Task 3', pRes: "Tanya", pStart: "2020-02-27", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 4, pParent: 1, pName: 'Task 4', pRes: "Kol", pStart: "2020-02-25", pEnd: "2020-03-19", pClass: "gtaskblue"},
    {pID: 5, pParent: 1, pName: 'Task 5', pRes: "Vit", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 6, pParent: 1, pName: 'Task 6', pRes: "Boy", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 7, pParent: 11, pName: 'Task 7', pRes: "San", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 8, pParent: 1, pName: 'Task 8', pRes: "Best", pStart: "2020-02-24", pEnd: "2020-03-13", pClass: "gtaskblue"},
    {pID: 9, pParent: 11, pName: 'Task 9', pRes: "All", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 10, pParent: 1, pName: 'Task 10', pRes: "Kolya1", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 11, pParent: 1, pName: 'Task 11', pRes: "Nata", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 12, pParent: 1, pName: 'Task 12', pRes: "Sveta", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 13, pParent: 1, pName: 'Task 13', pRes: "Kiril", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 14, pParent: 1, pName: 'Task 14', pRes: "Kolya3", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 15, pParent: 1, pName: 'Task 15', pRes: "Son", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 16, pParent: 1, pName: 'Task 16', pRes: "Bell", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 17, pParent: 1, pName: 'Task 17', pRes: "Wish", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 18, pParent: 1, pName: 'Task 18', pRes: "Zoya", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 19, pParent: 1, pName: 'Task 19', pRes: "Miss", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"},
    {pID: 20, pParent: 1, pName: 'Task 20', pRes: "Serg1", pStart: "2020-02-25", pEnd: "2020-03-17", pClass: "gtaskblue"}
];

const ELEMENT_DATA: Project[] = [
    {id: 1, position: 1, name: 'Project 1', resource: "Serg", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 40, tasks: Tasks},
    {id: 2, position: 2, name: 'Project 2', resource: "Kolya", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 51, tasks: []},
    {id: 3, position: 3, name: 'Project 3', resource: "Tanya", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 60, tasks: []},
    {id: 4, position: 4, name: 'Project 4', resource: "Kol", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 70, tasks: []},
    {id: 5, position: 5, name: 'Project 5', resource: "Vit", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 80, tasks: []},
    {id: 6, position: 6, name: 'Project 6', resource: "Boy", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 55, tasks: []},
    {id: 7, position: 7, name: 'Project 7', resource: "San", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 60, tasks: []},
    {id: 8, position: 8, name: 'Project 8', resource: "Best", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 48, tasks: []},
    {id: 9, position: 9, name: 'Project 9', resource: "All", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 90, tasks: []},
    {id: 10, position: 10, name: 'Project 10', resource: "Kolya1", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 65, tasks: []},
    {id: 11, position: 11, name: 'Project 11', resource: "Nata", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 70, tasks: []},
    {id: 12, position: 12, name: 'Project 12', resource: "Sveta", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 42, tasks: []},
    {id: 13, position: 13, name: 'Project 13', resource: "Kiril", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 43, tasks: []},
    {id: 14, position: 14, name: 'Project 14', resource: "Kolya3", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 50, tasks: []},
    {id: 15, position: 15, name: 'Project 15', resource: "Son", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 20, tasks: []},
    {id: 16, position: 16, name: 'Project 16', resource: "Bell", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 22, tasks: []},
    {id: 17, position: 17, name: 'Project 17', resource: "Wish", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 90, tasks: []},
    {id: 18, position: 18, name: 'Project 18', resource: "Zoya", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 31, tasks: []},
    {id: 19, position: 19, name: 'Project 19', resource: "Miss", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 20, tasks: []},
    {id: 20, position: 20, name: 'Project 20', resource: "Serg1", startDate: "2020-02-25", endDate: "2020-03-17", duration: 21, complete: 40, tasks: []}
];