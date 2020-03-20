import {Component} from '@angular/core';

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

    constructor() {}

    openSection(snav, key) {
        snav.close();
        for (let prop in this.showSection) {
            if(prop === key) {
                this.showSection[prop] = true;
            } else {
                this.showSection[prop] = false;
            }
        }
    }

}
