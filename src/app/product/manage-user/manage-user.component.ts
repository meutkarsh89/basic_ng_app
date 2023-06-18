import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { Iuser } from '../interface/user-interface';
import { UserServiceService } from '../services/uServices/user-service.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  @ViewChild('manageUserForm') userForm!:NgForm;

  usersList:Array<Iuser>=[
      {
        userId:'po1',
        userName:'macCase',
        userExpense:4000
      },
      {
        userId:'po2',
        userName:'iphone cover',
        userExpense:1000
      },
      {
        userId:'po3',
        userName:'iwatch',
        userExpense:40000
      },
      {
        userId:'po4',
        userName:'MacBook',
        userExpense:76000
      },
  ]

  editMode:boolean=false;
  editableUseData!:Iuser;
  constructor(private _userService:UserServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  onSubmit(userForm:NgForm){
    console.log(userForm.form.value);
    if(this.editMode){
      const updatedUser = {
        ...this.editableUseData,
        ...userForm.form.value
      }
      console.log(updatedUser);
      
      this.updateUser(updatedUser);
    }
    else{
      this.addUser(userForm.form.value);
    }
    this.userForm.reset();
  }

  deleteUser(userId:Iuser["uniqueKey"]){
    return this._userService.deleteUser(userId).subscribe(res=>{
      console.log(res);
      this.getUsers();
    })
  }

  setValueOnEdit(editabelUser:Iuser){
    console.log("edit now");
    this.editMode=true;
    this.editableUseData=editabelUser;
    this.userForm.setValue({
      userId:editabelUser.userId,
      userName:editabelUser.userName,
      userExpense:editabelUser.userExpense
    })
  }

  updateUser(userData:Iuser){
    console.log('update clicked');
    this._userService.editUser(userData).subscribe(res=>{
      this.getUsers();
    })
    this.editMode=false;
  }

  addUser(userData:Iuser){
    this._userService.addUser(userData).subscribe(res=>{
      console.log(res);
      this.getUsers();
    })
  }

  getUsers(){
    this._userService.fetchUsers()
    .pipe(map(userData=>{
      let userArray:Array<Iuser>=[];
      for(let key in userData){
        if(userData.hasOwnProperty(key)){
          userArray.push( {uniqueKey:key,...userData[key]} )
        }
      }
      return userArray;
    }))
    .subscribe(userResponse=>{
      console.log(userResponse);
      this.usersList=userResponse;
    })
  }

}
