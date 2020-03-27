import {Component, Input} from '@angular/core';
import{Project} from '../project/project.list.component'
import { ProjectSwitch } from '../project-switch/project-switch';

@Component({
  selector: 'menu-charts',
  templateUrl: 'menu-charts.html',
  styleUrls: ['menu-charts.css'],
})
export class MenuCharts {

    @Input() projectSwitch: ProjectSwitch;
    
}
