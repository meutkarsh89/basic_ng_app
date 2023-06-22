import { Component, OnInit, ViewChild } from '@angular/core';
import { Iemployee } from '../employee/employeeInterface/empInterface';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee/employeeService/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  @ViewChild('empForm') employeeForm!: NgForm;
  userId!:Iemployee["uniqueKey"];
  userDetail!:Iemployee;
  editMode:boolean = false;

  constructor(private _router:Router, private _activatedRoute:ActivatedRoute, private _empService:EmployeeService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(res=>{
      //this.userId = res.get('id')!;
      this.userId = res.get('id') as string;
      this._empService.getSingleEmployee(this.userId).subscribe(userD=>{
        const ud = {uniqueKey: this.userId, ...userD};
        this.userDetail=ud;
      })
    })

    this._activatedRoute.queryParamMap.subscribe(res=>{
      res.get('edit')?this.editMode=true:this.editMode=false;
    })
  }

  submitForm(employeeForm:NgForm){
    console.log(employeeForm.form.value);
    const emp = employeeForm.form.value;
    this._empService.updateSingleEmployee(this.userId, emp).subscribe(res=>{
      console.log(res);
      
    })
    this._router.navigate(['./'],{relativeTo: this._activatedRoute});
    this.editMode=false;
  }

}
