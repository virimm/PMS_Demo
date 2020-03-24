import {Component} from '@angular/core';
import{Project} from '../project/project.list.component'

@Component({
  selector: 'project-switch',
  templateUrl: 'project-switch.html',
  styleUrls: ['project-switch.css'],
})
export class ProjectSwitch {

    isShowInfoProject: boolean = false;
    selectProject: Project;

}
