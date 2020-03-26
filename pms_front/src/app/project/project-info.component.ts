import { Component, OnInit, Input } from '@angular/core';
import { JSGantt } from '../jsgant/jsgantt';
import { ProjectSwitch } from '../project-switch/project-switch';
 
@Component({
    selector: 'project-info',
    templateUrl: 'project-info.component.html',
    styleUrls: ['project-info.component.css']
})

export class ProjectInfoComponent implements OnInit {

    @Input() projectSwitch: ProjectSwitch;

    jsGant: any;

    isEdit: boolean = false;

    vCaptionType: string = "Complete";
    vQuarterColWidth: number = 36;
    vDateTaskDisplayFormat: string = "day dd month yyyy";
    vDayMajorDateDisplayFormat: string = "mon yyyy - Week ww";
    vWeekMinorDateDisplayFormat: string = "dd mon";
    vLang: string = "ru";
    vEditable: boolean = false;
    vShowTaskInfoLink: number = 1;
    vShowEndWeekDate: number = 0;
    vAdditionalHeaders: any;
    vUseSingleCell: number = 10000;
    vShowCost: number = 1;
    vFormatArr: any = ['Day', 'Week', 'Month', 'Quarter'];
    vResources: any = [];

    constructor() {}

    ngOnInit() {
        const project = this.projectSwitch.selectProject;
        const tasks = this.projectSwitch.selectProject.tasks;
        project.pCost = this.calcSum(tasks);

        this.jsGant = new JSGantt.GanttChart(document.getElementById('GanttChartDIV'), 'day');

        this.setOptionsGant();
        this.addProjectOrTask(project);
        this.addTasks(tasks);
        this.drawGant();
    }

    calcSum(tasks) {
      return tasks.reduce(function(acc, val) { return acc + val.pCost; }, 0);
    }

    initOptionGant() {
      return {
        vCaptionType: this.vCaptionType,    
        vQuarterColWidth: this.vQuarterColWidth,
        vDateTaskDisplayFormat: this.vDateTaskDisplayFormat,
        vDayMajorDateDisplayFormat: this.vDayMajorDateDisplayFormat,
        vWeekMinorDateDisplayFormat: this.vWeekMinorDateDisplayFormat,
        vLang: this.vLang,
        vEditable: this.vEditable,
        vShowTaskInfoLink: this.vShowTaskInfoLink,
        vShowEndWeekDate: this.vShowEndWeekDate,
        vAdditionalHeaders: this.vAdditionalHeaders,
        vUseSingleCell: this.vUseSingleCell,
        vResources: this.vResources,
        vShowCost: this.vShowCost,
        vFormatArr: this.vFormatArr
      };
    }

    setOptionsGant() {
      if(this.jsGant) {
        this.jsGant.setOptions(this.initOptionGant());
      } else {
        console.error('JSGantt is null');
      }
    }

    addProjectOrTask(project) {
      if(!this.jsGant) {
        console.error('JSGantt is null');
        return;
      }
      if(!project) {
        console.error('Main project or task is null');
        return;
      }
      this.jsGant.AddTaskItemObject(project);
    }

    addTasks(tasks) {
      if(tasks) {
        tasks.forEach(function(data) {
          this.addProjectOrTask(data);
        }, this);
      } else {
        console.error('Tasks is null');
      }
    }

    drawGant() {
      if(!this.jsGant) {
        console.error('JSGantt is null');
        return;
      }
      this.jsGant.Draw();
    }

    clickEdit() {
      this.vEditable = !this.isEdit;
      this.setOptionsGant();
      this.drawGant();
    }

}