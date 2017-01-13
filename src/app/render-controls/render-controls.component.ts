import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'fb-render-controls',
    templateUrl: './render-controls.component.html',
    styleUrls: ['./render-controls.component.css']
})
export class RenderControlsComponent implements OnInit {
    getParseddata;
    labelvalue;
    typevalue;
    t;
    arrayforLabel = [];
    arrayforType = [];
    constructor() {
    }

    ngOnInit() {

        this.getParseddata = JSON.parse(localStorage.getItem('Control-details')); 
        this.createControls();

    }
    createControls() { //Method used to get the values of the control elements from localstorage.

        for (var i = 0; i < this.getParseddata.length; i++) {
            this.labelvalue = this.getParseddata[i].Label;
            this.arrayforLabel.push(this.labelvalue);
            this.typevalue = this.getParseddata[i].Type;
            this.arrayforType.push(this.typevalue);
        }

    }

}
