// google  (code from   https://github.com/ShemiNechmad/GoogleSignInAngular )
//import { Component, OnInit } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var google: any;
// end google
// make sure you mention both http://localhost and http://localhost:4200
// in google's cloud platform "Authorized Javascript Origins".
// replace my key with yours


// import { User } from '../user';
// import { NewUser } from '../user';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  display: boolean = true;
  // newUser: NewUser = {
  //   userName: "",
  //   pw: ""
  // }
  // existingUser: User = {
  //   userName: "",
  //   pw: "",
  //   _id: ""
  // }
  

  // now ceate user accounts at Google, not here
  // CreateAccount(pUserName:string, pPw:string): void {      //newuser does not have an _id
  //     this.newUser = {
  //       userName: pUserName,
  //       pw: pPw
  //     }

  //   this.userService.newUser(this.newUser)
  //  .subscribe(data => {
  //   this.existingUser = data;
  //   this.display = true;

  //   sessionStorage.setItem('ID:', this.existingUser._id );
  //   sessionStorage.setItem('Name:', this.existingUser.userName);
  //   //window.location.href = '/dashboard';

  //   //return
  //  })
  // }

  // login(pUserName:string, pPw:string): void {

  //   this.newUser = {
  //     userName: pUserName,
  //     pw: pPw
  //   }
  //   this.userService.loginUser(this.newUser)
  //     .subscribe(data => {
  //       console.log("id coming back " + data)
  //       this.existingUser._id = data;
  //       sessionStorage.setItem('ID:', data );
  //       sessionStorage.setItem('Name:', this.newUser.userName);
 
  //       this.display = true;
  //       console.log("in login " + this.display);
  //       //window.location.href = '/dashboard';
  //       //return  // not sure this is needed, but a multi line subscribe method normally needs one
  //      });
  // }

  logout(): void{
    sessionStorage.removeItem("ID:");  //how to get it back to null
    sessionStorage.setItem('Name:', "");
    sessionStorage.setItem('Picture:', "");
    this.display = false;
    console.log("in logout " + this.display);
    window.location.href = '/dashboard';
  }

  //constructor(private userService: UserService) { }  // don't need a user server
  // unless you want to control who can login
  constructor() { }

     ngOnInit(): void {
        // this.existingUser = {
        //   userName: "",
        //   pw: "",
        //   _id: ""
        // }
     
        if( sessionStorage.getItem('ID:') == null ) {
          this.display = false;
        }
        else {
          var x = sessionStorage.getItem('ID:');
          if (x != null){
          this.display = true;
        }
      }
  
    }


    ngAfterViewInit(): void {
      // this key is under my (stephanie's) google account
      google.accounts.id.initialize({
        client_id: "1053501146404-gn60miljv5ffee22rsnrhhfl41blh9kh.apps.googleusercontent.com",
        callback: (response: any) => this.handleGoogleSignIn(response)

      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { size: "large", type: "icon", shape: "rectangular", theme:"dark" }  // customization attributes
      );
    }
  
    handleGoogleSignIn(response: any): void {
      // This next is for decoding the idToken to an object if you want to see the details.
      let base64Url = response.credential.split('.')[1];
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      console.log(JSON.parse(jsonPayload));
      var goggleobject = JSON.parse(jsonPayload);
      console.log(goggleobject.name);
      console.log(goggleobject.iat);
      sessionStorage.setItem('ID:', goggleobject.sub ); // The unique ID of the user's Google Account
      sessionStorage.setItem('Name:', goggleobject.name);
      sessionStorage.setItem('Picture:', goggleobject.picture);
      
      this.display = true;
      window.location.href = '/dashboard';
    }

}

/* this app lets anyone with a google account log in
it therefore does not use my user service and does not keep accounts in mongoDB
if you wanted to control who is allowed to use the site, then when they login, 
you would (after appropriate modifications) send a person's goggle ID up to the server
to see if that ID is in your database, if so, you let them in,
if not --- ??
  ?? maybe you have a secret site password, and if a new user doesn't have that PW
  you ignore their login attempt and do not call google
  ?? maybe your user ID DB has a propery "approved" and you check if this account is
  approved. if not, a system manager would have to look (or be notified) to decide
  to flip that bit
  ??
  */