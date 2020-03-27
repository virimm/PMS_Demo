import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as CanvasJS from '../../charts/assets/canvasjs.min';
import { ProjectSwitch } from '../../project-switch/project-switch';
 
@Component({
	selector: 'pie-charts',
    templateUrl: 'pie-charts.html',
    styleUrls: ['pie-charts.css']
})
 
export class PieChartsComponent implements OnInit, AfterViewInit {

    @Input() projectSwitch: ProjectSwitch;

    chart: any;
    idChart: string = "analiticalChartPie";
    type: string = "pie";

    theme: string = "light2";
    animationEnabled: boolean = true;
    exportEnabled: boolean = true;
    title: any;

    showInLegend: boolean = true;
    toolTipContent: string = "<b>{name}</b>: ${y} (#percent%)";
    indexLabel: string = "{name} выполнения - #percent%";
    dataPoints: any[];

	ngOnInit() {}

    ngAfterViewInit() {
        this.getWindowHieght();
        this.initChart(this.projectSwitch.selectProject.pName, this.type);
        this.renederChat();
    }

    getWindowHieght() {
        let hieghtTab = document.querySelector('.mat-tab-label-container').clientHeight;
        let heightToolbar = document.querySelector('mat-toolbar').clientHeight;
        let container = document.getElementById(this.idChart);
        let height = window.innerHeight - hieghtTab - heightToolbar - 10;
        container.style.height = height  + "px";
    }

    initChart(title, type) {
        this.chart = new CanvasJS.Chart(this.idChart, {
            theme: this.theme,
            animationEnabled: this.animationEnabled,
            exportEnabled: this.exportEnabled,
            title:{
                text: title
            },
            data: [this.initDataPoints(type)]
        });
    }

    initDataPoints(type) {
        let projects = [];
        let dataPoints = [];
        
        if(this.projectSwitch.selectProject) {
            projects = this.projectSwitch.selectProject.tasks;
        }

        if(projects.length > 0) {
            projects.forEach(function(item) {
                let point = {
                    y: item.pComp,
                    name: item.pName
                }
                dataPoints.push(point);
            }, this);
        }

        return {
            type: type,
            showInLegend: this.showInLegend,
            toolTipContent: this.toolTipContent,
            indexLabel: this.indexLabel,
            dataPoints: dataPoints
        }
    }

    renederChat() {
        if(this.chart) {
            this.chart.render();
        }
    }
}