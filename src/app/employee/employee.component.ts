import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iemployee } from './employeeInterface/empInterface';
import { EmployeeService } from './employeeService/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Array<Iemployee> = [
    {
      uname: 'Alfred Wagner',
      designation: 'Senior Engineer',
      department: 'Insurance',
      status: 'online'
    },
    {
      uname: 'Rover Dey',
      designation: 'Instrumentation Engineer',
      department: 'Products',
      status: 'offline'
    },
    {
      uname: 'Roger Binny',
      designation: 'Data Engineer',
      department: 'Insurance',
      status: 'online'
    },
    {
      uname: 'Lily Evans',
      designation: 'Senior Engineer',
      department: 'Insurance',
      status: 'offline'
    },
    {
      uname: 'Chris Evans',
      designation: 'Senior Scientist',
      department: 'Insurance',
      status: 'away'
    }
  ]

  constructor(private _empService:EmployeeService) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this._empService.getEmployees()
    .pipe(map(emp=>{
      let empArr: Iemployee[] = [];
      for(const key in emp){
        if(emp.hasOwnProperty(key)){
          empArr.push({uniqueKey:key, ...emp[key]})
        }
      }
      return empArr;
    }))
    .subscribe(employee => {
      console.log(employee);
      
      this.employees = employee;
    })
  }

}
