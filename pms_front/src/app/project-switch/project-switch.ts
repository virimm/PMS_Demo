import {Component, OnInit} from '@angular/core';
import{Project} from '../project/project.list.component'

@Component({
  selector: 'project-switch',
  templateUrl: 'project-switch.html',
  styleUrls: ['project-switch.css'],
})
export class ProjectSwitch implements OnInit {

  isShowInfoProject: boolean;
  isShowCharts: boolean;
  isShowMainProjectList: boolean;

  selectProject: Project;

  ngOnInit() {
    this.isShowInfoProject = false;
    this.isShowCharts = false;
    this.isShowMainProjectList = true;
  }

}
