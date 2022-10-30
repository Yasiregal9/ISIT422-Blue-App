import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NewUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  display: boolean;
  newUser: NewUser;
  existingUser: User;
  
  CreateAccount(pUserName:string, pPw:string): void {      //newuser does not have an _id
      this.newUser = {
        userName: pUserName,
        pw: pPw
      }

    this.userService.newUser(this.newUser)
   .subscribe(data => {
    this.existingUser = data;
    this.display = true;

    sessionStorage.setItem('ID:', this.existingUser._id );
    sessionStorage.setItem('Name:', this.existingUser.userName);
    //window.location.href = '/dashboard';

    //return
   })
  }

  login(pUserName:string, pPw:string): void {

    this.newUser = {
      userName: pUserName,
      pw: pPw
    }
    this.userService.loginUser(this.newUser)
      .subscribe(data => {
        console.log("id coming back " + data)
        this.existingUser._id = data;
        sessionStorage.setItem('ID:', data );
        sessionStorage.setItem('Name:', this.newUser.userName);
 
        this.display = true;
        console.log("in login " + this.display);
        //window.location.href = '/dashboard';
        //return  // not sure this is needed, but a multi line subscribe method normally needs one
       });
  }

  logout(): void{
    sessionStorage.setItem('ID:', "" );
    sessionStorage.setItem('Name:', "");
    this.display = false;
    console.log("in logout " + this.display);
    //window.location.href = '/dashboard';
  }

  constructor(private userService: UserService) {
     }

     ngOnInit(): void {
      this.existingUser = {
        userName: "",
        pw: "",
        _id: ""
      }
      if(  sessionStorage.getItem('ID:') == null ) {
        console.log('in init1 false');
        this.display = false;
      }
      else if(  sessionStorage.getItem('ID:').length < 5 )
      {
        console.log('in init2 false');
        this.display = false;
      }
      else {
        this.display = true;
        console.log('in init3 true');
      }
    }

}