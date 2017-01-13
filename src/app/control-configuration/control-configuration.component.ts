import { Component, OnInit, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'fb-control-configuration',
    templateUrl: './control-configuration.component.html',
    styleUrls: ['./control-configuration.component.css']
})
export class ControlConfigurationComponent implements OnInit {
    controltypeactive1: string = "--Select--";
    controltypeactive2: string = "--Select--";
    controltypeactive3: string = "--Select--";
    currentTypevalue;
    currentSelectboxid

    controltype: string[] = ["--Select--", "Textbox", "Number", "Dropdown", "Checkbox", "Textarea"]
    pushingArray = [];
    configObject = {};
    temporaryvariableTopush;
    currentTextvalue;


    constructor(private router: Router) {
    }

    ngOnInit() {
    }
    getcontrollabelValue(currentTextvalue) { //Method used to get the value of labelname field  and push into localstorage.
        if (this.currentTextvalue !== "") {
            this.currentTextvalue = currentTextvalue;

            this.temporaryvariableTopush = { 'Label': this.currentTextvalue };
            this.pushingArray.push(this.temporaryvariableTopush);
            localStorage.setItem("Control-details", JSON.stringify(this.pushingArray));
        }
    }
    getcontroltypeValue(currentTypevalue, currentSelectboxid) { //Method used to get the value of controltype field  and push into localstorage.
        if (this.currentTypevalue !== "--Select--") {
            this.currentTypevalue = currentTypevalue;
            this.temporaryvariableTopush = { 'Type': this.currentTypevalue };
            this.pushingArray = JSON.parse(localStorage.getItem('Control-details'));
            this.pushingArray.push(this.temporaryvariableTopush);
            localStorage.setItem("Control-details", JSON.stringify(this.pushingArray));
        }
    }
    getcontrolSpecification(configObject: any): void { //Method used to redirect to next page.
        this.router.navigate(['/render-controls']);
    }

}
