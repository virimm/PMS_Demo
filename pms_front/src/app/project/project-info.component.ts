import { Component, OnInit, Input } from '@angular/core';
import { JSGantt } from '../jsgant/jsgantt';
import { ProjectSwitch } from '../project-switch/project-switch';
 
@Component({
    selector: 'project-info',
    templateUrl: 'project-info.component.html'
})

export class ProjectInfoComponent implements OnInit {

    @Input() projectSwitch: ProjectSwitch;

    constructor() {}

    ngOnInit() {
        
        var g = new JSGantt.GanttChart(document.getElementById('GanttChartDIV'), 'day');

        g.setOptions({
            vCaptionType: 'Complete',  // Set to Show Caption : None,Caption,Resource,Duration,Complete,     
            vQuarterColWidth: 36,
            vDateTaskDisplayFormat: 'day dd month yyyy', // Shown in tool tip box
            vDayMajorDateDisplayFormat: 'mon yyyy - Week ww',// Set format to dates in the "Major" header of the "Day" view
            vWeekMinorDateDisplayFormat: 'dd mon', // Set format to display dates in the "Minor" header of the "Week" view
            vLang: 'ru',
            vShowTaskInfoLink: 1, // Show link in tool tip (0/1)
            vShowEndWeekDate: 0,  // Show/Hide the date for the last day of the week in header for daily
            vAdditionalHeaders: { // Add data columns to your table
                category: {
                  title: 'Category'
                },
                sector: {
                  title: 'Sector'
                }
              },
            vUseSingleCell: 10000, // Set the threshold cell per table row (Helps performance for large data.
            vFormatArr: ['Day', 'Week', 'Month', 'Quarter'], // Even with setUseSingleCell using Hour format on such a large chart can cause issues in some browsers,
            
        });

          g.AddTaskItemObject({
            pID: this.projectSwitch.selectProject.id,
            pName: this.projectSwitch.selectProject.name,
            pStart: this.projectSwitch.selectProject.startDate,
            pEnd: this.projectSwitch.selectProject.endDate,
            // pPlanStart: "2017-04-01",
            // pPlanEnd: "2017-04-15 12:00",
            pClass: "ggroupblack",
            pLink: "",
            pMile: 0,
            pRes: this.projectSwitch.selectProject.resource,
            pComp: 0,
            pGroup: 0,
            pParent: 0,
            pOpen: 1,
            pDepend: "",
            pCaption: "",
            pCost: 1000,
            pNotes: "Some Notes text",
            category: "My Category",
            sector: "Finance"
          });

        var dataArr = this.projectSwitch.selectProject.tasks;

        dataArr.forEach(function(data) {
            g.AddTaskItemObject(data);
        })


          
        g.Draw();
    
    }

    initialData() {
        return [{
          'pID': 1,
          'pName': 'Define Chart API v1',
          'pStart': '',
          'pEnd': '',
          'pClass': 'ggroupblack',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Brian',
          'pComp': 0,
          'pGroup': 1,
          'pParent': 0,
          'pOpen': 1,
          'pDepend': '',
          'pCaption': '',
          'pNotes': 'Some Notes text'
        },
        {
          'pID': 11,
          'pName': 'Chart Object',
          'pStart': '2017-02-20',
          'pEnd': '2017-02-20',
          'pClass': 'gmilestone',
          'pLink': '',
          'pMile': 1,
          'pRes': 'Shlomy',
          'pComp': 100,
          'pGroup': 0,
          'pParent': 1,
          'pOpen': 1,
          'pDepend': '',
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 12,
          'pName': 'Task Objects',
          'pStart': '',
          'pEnd': '',
          'pClass': 'ggroupblack',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Shlomy',
          'pComp': 40,
          'pGroup': 1,
          'pParent': 1,
          'pOpen': 1,
          'pDepend': '',
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 121,
          'pName': 'Constructor Proc #1234 of February 2017',
          'pStart': '2017-02-21',
          'pEnd': '2017-03-09',
          'pClass': 'gtaskblue',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Brian T.',
          'pComp': 60,
          'pGroup': 0,
          'pParent': 12,
          'pOpen': 1,
          'pDepend': '',
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 122,
          'pName': 'Task Variables',
          'pStart': '2017-03-06',
          'pEnd': '2017-03-11',
          'pPlanStart': '2017-03-03',
          'pPlanEnd': '2017-03-09',
          'pClass': 'gtaskred',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Brian',
          'pComp': 60,
          'pGroup': 0,
          'pParent': 12,
          'pOpen': 1,
          'pDepend': 121,
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 123,
          'pName': 'Task by Minute/Hour',
          'pStart': '',
          'pEnd': '',
          'pPlanStart': '2017-03-01',
          'pPlanEnd': '2017-03-15 12:00',
          'pClass': 'gtaskyellow',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Ilan',
          'pComp': 60,
          'pGroup': 0,
          'pParent': 12,
          'pOpen': 1,
          'pDepend': '',
          'pCaption': '',
          'pNotes': '',
          'pCost': 1000
        },
        {
          'pID': 124,
          'pName': 'Task Functions',
          'pStart': '2017-03-09',
          'pEnd': '2017-03-29',
          'pClass': 'gtaskred',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Anyone',
          'pComp': 60,
          'pGroup': 0,
          'pParent': 12,
          'pOpen': 1,
          'pDepend': '123SS',
          'pCaption': 'This is a caption',
          'pNotes': null
        },
        {
          'pID': 2,
          'pName': 'Create HTML Shell',
          'pStart': '2017-03-24',
          'pEnd': '2017-03-24',
          'pClass': 'gtaskyellow',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Brian',
          'pComp': 20,
          'pGroup': 0,
          'pParent': 0,
          'pOpen': 1,
          'pDepend': 122,
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 3,
          'pName': 'Code Javascript',
          'pStart': '',
          'pEnd': '',
          'pClass': 'ggroupblack',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Brian',
          'pComp': 0,
          'pGroup': 1,
          'pParent': 0,
          'pOpen': 1,
          'pDepend': '',
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 31,
          'pName': 'Define Variables',
          'pStart': '2017-02-25',
          'pEnd': '2017-03-17',
          'pClass': 'gtaskpurple',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Brian',
          'pComp': 30,
          'pGroup': 0,
          'pParent': 3,
          'pOpen': 1,
          'pDepend': '',
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 32,
          'pName': 'Calculate Chart Size',
          'pStart': '2017-03-15',
          'pEnd': '2017-03-24',
          'pClass': 'gtaskgreen',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Shlomy',
          'pComp': 40,
          'pGroup': 0,
          'pParent': 3,
          'pOpen': 1,
          'pDepend': '',
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 33,
          'pName': 'Draw Task Items',
          'pStart': '',
          'pEnd': '',
          'pClass': 'ggroupblack',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Someone',
          'pComp': 40,
          'pGroup': 2,
          'pParent': 3,
          'pOpen': 1,
          'pDepend': '',
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 332,
          'pName': 'Task Label Table',
          'pStart': '2017-03-06',
          'pEnd': '2017-03-09',
          'pClass': 'gtaskblue',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Brian',
          'pComp': 60,
          'pGroup': 0,
          'pParent': 33,
          'pOpen': 1,
          'pDepend': '',
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 333,
          'pName': 'Task Scrolling Grid',
          'pStart': '2017-03-11',
          'pEnd': '2017-03-20',
          'pClass': 'gtaskblue',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Brian',
          'pComp': 0,
          'pGroup': 0,
          'pParent': 33,
          'pOpen': 1,
          'pDepend': '332',
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 34,
          'pName': 'Draw Task Bars',
          'pStart': '',
          'pEnd': '',
          'pClass': 'ggroupblack',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Anybody',
          'pComp': 60,
          'pGroup': 1,
          'pParent': 3,
          'pOpen': 0,
          'pDepend': '',
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 341,
          'pName': 'Loop each Task',
          'pStart': '2017-03-26',
          'pEnd': '2017-04-11',
          'pClass': 'gtaskred',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Brian',
          'pComp': 60,
          'pGroup': 0,
          'pParent': 34,
          'pOpen': 1,
          'pDepend': '',
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 342,
          'pName': 'Calculate Start/Stop',
          'pStart': '2017-04-12',
          'pEnd': '2017-05-18',
          'pClass': 'gtaskpink',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Brian',
          'pComp': 60,
          'pGroup': 0,
          'pParent': 34,
          'pOpen': 1,
          'pDepend': '',
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 343,
          'pName': 'Draw Task Div',
          'pStart': '2017-05-13',
          'pEnd': '2017-05-17',
          'pClass': 'gtaskred',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Brian',
          'pComp': 60,
          'pGroup': 0,
          'pParent': 34,
          'pOpen': 1,
          'pDepend': '',
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 344,
          'pName': 'Draw Completion Div',
          'pStart': '2017-05-17',
          'pEnd': '2017-06-04',
          'pClass': 'gtaskred',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Brian',
          'pComp': 60,
          'pGroup': 0,
          'pParent': 34,
          'pOpen': 1,
          'pDepend': '342,343',
          'pCaption': '',
          'pNotes': ''
        },
        {
          'pID': 35,
          'pName': 'Make Updates',
          'pStart': '2017-07-17',
          'pEnd': '2017-09-04',
          'pClass': 'gtaskpurple',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Brian',
          'pComp': 30,
          'pGroup': 0,
          'pParent': 3,
          'pOpen': 1,
          'pDepend': '333',
          'pCaption': '',
          'pNotes': ''
        }];
      }

}