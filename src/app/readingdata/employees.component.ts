import { Component } from '@angular/core';

@Component({
  
  moduleId: module.id,
  selector: 'employees',
  templateUrl: 'employees.component.html',
  styleUrls: ['employees.component.css']
})
export class EmployeesComponent {
  employees:any[]=[
  		{id:101,firstName:'Abhishek',lastName:'Singh',DepartName:'UD',DOB:'30/12/1990'},
  		{id:102,firstName:'Prateek',lastName:'Kumar',DepartName:'Advice',DOB:'10/08/1992'},
  		{id:103,firstName:'Chetan',lastName:'Singh',DepartName:'Inst',DOB:'20/9/1990'},
  		{id:104,firstName:'Susmith',lastName:'Singh',DepartName:'Testing',DOB:'29/10/1991'},
  		{id:105,firstName:'Ateet',lastName:'Singh',DepartName:'Mobile',DOB:'11/11/1989'}
  	];
}
