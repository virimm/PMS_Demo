import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: 'main-page.html'
})
export class MainPageComponent implements AfterViewInit {

    ngAfterViewInit() {
        let heightToolbar = document.querySelector('mat-toolbar').clientHeight;
        let container = document.getElementById('intro');
        let height = window.innerHeight  - heightToolbar - 25;
        container.style.height = height  + "px";
    }
}
