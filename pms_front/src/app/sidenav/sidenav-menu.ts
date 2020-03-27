import {Component, ViewChild} from '@angular/core';
import { ProjectSwitch } from '../project-switch/project-switch';

@Component({
  selector: 'sidenav-menu',
  templateUrl: 'sidenav-menu.html',
  styleUrls: ['sidenav-menu.css'],
})
export class SidenavMenu {
    showSection = {
        showAllProject: true,
        showMyTasks: false
    };

    @ViewChild(ProjectSwitch, {static: false})
    private projectSwitch: ProjectSwitch;

    openSection(snav, key) {
        snav.close();

        for (let prop in this.showSection) {
            this.showSection[prop] = false;
        }
        if(this.showSection.hasOwnProperty(key)) {
            this.showSection[key] = true;
        }
        
        this.openMainListProject();
    }

    openMainListProject() {
        if(this.projectSwitch) {
            this.projectSwitch.isShowInfoProject = false;
            this.projectSwitch.isShowCharts = false;
            this.projectSwitch.isShowMainProjectList = true;
        }
    }

}
