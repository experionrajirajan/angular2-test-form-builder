import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ControlConfigurationComponent } from './control-configuration/control-configuration.component';
import { RenderControlsComponent } from './render-controls/render-controls.component';
import { RouterModule, Routes } from '@angular/router';
import {Router,ActivatedRoute} from '@angular/router';

const appRoutes: Routes = [
	    { path: '', component: ControlConfigurationComponent },

	{ path: 'render-controls', component: RenderControlsComponent }

];

@NgModule({
	declarations: [
		AppComponent,
		ControlConfigurationComponent,
		RenderControlsComponent
	],
	imports: [
		RouterModule.forRoot(appRoutes),
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
