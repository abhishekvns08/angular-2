import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } 	 from       './app.component';
import { EmployeeComponent } from  		'./employee/employee.component';
import {SampleComponent} 	 from      	'./samplecomponent/sample.component'
import {EmployeesComponent}  from   	'./readingdata/employees.component'

@NgModule({
  declarations: [AppComponent,EmployeeComponent,SampleComponent,EmployeesComponent],
  imports: [BrowserModule,FormsModule,HttpModule],
  providers: [],
  bootstrap: [AppComponent,EmployeeComponent,SampleComponent,EmployeesComponent]
  
  
 
})
export class AppModule { }
