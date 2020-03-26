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
        this.generateRandomnProject();

        this.initDataSource();
    }

    initDataSource() {
        this.dataSource = new MatTableDataSource<Project>(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    cleanFilter() {
        this.filterData = "";
        this.initDataSource();
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

        this.initDataSource();
    }

    calculatePosition(arr) {
        const lastPos = arr[arr.length - 1].position;
        return lastPos + 1;
    }

    openInfoProject(element) {
        element.tasks = this.generateRandomnTask(element);

        this.projectSwitch.selectProject = element;
        this.projectSwitch.isShowInfoProject = true;
    }

    generateRandomnTask(element) {
        let tasks = [];
        tasks.push(this.createNewRandomnProject(121, "Task", "gtaskblue", 0, element.pID, ""));
        tasks.push(this.createNewRandomnProject(122, "Task", "ggroupblack", 1, element.pID, ""));
        tasks.push(this.createNewRandomnProject(123, "Task", "gtaskred", 0, 122, ""));
        tasks.push(this.createNewRandomnProject(124, "Task", "gtaskgreen", 0, 122, "123"));
        tasks.push(this.createNewRandomnProject(125, "Task", "gtaskyellow", 0, 122, "124"));
        tasks.push(this.createNewRandomnProject(126, "Task", "gtaskpurple", 0, 122, "124"));
        tasks.push(this.createNewRandomnProject(126, "Task", "gtaskpink", 0, 122, ""));

        tasks.push(this.createNewRandomnProject(127, "Task", "ggroupblack", 1, 122, ""));
        tasks.push(this.createNewRandomnProject(128, "Task", "gtaskpurple", 0, 127, ""));
        tasks.push(this.createNewRandomnProject(129, "Task", "gtaskred", 0, element.pID, ""));
        return tasks;
    }

    generateRandomnProject() {
        ELEMENT_DATA = Array.from(
            {length: 100}, 
            (_, k) => this.createNewRandomnProject(k + 1,"Project", "ggroupblack", 1, 0, "")
        );
    }

    generateRandomnName() {
        const names = [
            'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
            'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
            ];
        return names[Math.round(Math.random() * (names.length - 1))] + ' ' +
            names[Math.round(Math.random() * (names.length - 1))].charAt(0) + '.';
    }

    generateNumberStr(value) {
        return value < 10 ? "0" + value : value
    }

    substractDate(dateStart, dateEnd) {
        const diffTime = Math.abs(dateEnd - dateStart);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    }

    createNewRandomnProject(
        id: number,
        pName: string, 
        pClass: string, 
        pGroup: number, 
        pParent: number,
        pDepend: string,
        pCost: number = 0
    ): Project {
        const monthStart = Math.floor(Math.random() * 12) + 1;
        const dayStart = Math.floor(Math.random() * 28) + 1;

        let monthEnd = 0;
        while(monthStart > monthEnd) {
            monthEnd = Math.floor(Math.random() * 12) + 1;
        }

        const pStart = "2020-" + this.generateNumberStr(monthStart) + "-" + this.generateNumberStr(dayStart);
        const pEnd = "2020-" + this.generateNumberStr(monthEnd) + "-" + this.generateNumberStr(dayStart + 1);
    
        return {    
            pID: id,
            position: id,
            pName: pName + "_" + id,
            pRes: this.generateRandomnName(),
            pStart: pStart,
            pEnd: pEnd,
            duration: this.substractDate(new Date(pStart), new Date(pEnd)),
            pCost: pCost === 0 ? Math.floor(Math.random() * 10000) + 1 : pCost,
            pComp: Math.floor(Math.random() * 99) + 1,
            pClass: pClass,
            pGroup: pGroup,
            pParent: pParent,
            pOpen: 1,
            pDepend: pDepend,
            pNotes: "Hello world",
            tasks: []
        };
    }
}

let ELEMENT_DATA: Project[] = [];

export class Project {
    pID: number;
    position: number;
    pName: string;
    pRes: string;
    pStart: string;
    pEnd: string;
    duration: number;
    pCost: number;
    pComp: number = 0;
    pClass: string;
    pGroup: number;
    pParent: number = 0;
    pOpen: number = 1;
    pDepend: string = "";
    pNotes: string = "";
    tasks: Array<Project> = [];
}