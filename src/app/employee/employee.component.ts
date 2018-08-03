import { Component } from '@angular/core';

@Component({
  
  moduleId: module.id,
  selector: 'app-employee',
  templateUrl: 'employee.component.html',
  styleUrls: ['employee.component.css']
})
export class EmployeeComponent {
  firstName:string='Abhishek';
  lastName:string='Singh';
  age:number=27;
  department:string='Digital';
  imgPath:string="";
  colSpan:number=2;
  //classtouse:string="class1";
  usingclass3:boolean=true;
  clr:string="Blue";
  bgr:string="yellow";
  showDetails:boolean=false;
  btnTxt:string="Show Details";
  empName():string{
  return this.firstName +' ' + this.lastName;
  }
  /*btnclick():void{
  alert("Hello Button");
  }*/
  
  displayDetails(): void{
  	this.showDetails=!this.showDetails;
  	this.btnTxt=this.showDetails==true?"hide Details":"Show Details";
  	if(this.showDetails)
  	{
  	this.imgPath="/app/employee/way.png";
  	}
  	else
  	{
  	this.imgPath="";
  	}
  	
  }
  
  
}
