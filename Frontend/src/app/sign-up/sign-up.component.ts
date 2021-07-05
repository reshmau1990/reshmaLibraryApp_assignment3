import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbarservice.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  constructor(private _router: Router, private signupService: SignUpService, public header: HeaderService, public nav: NavbarService) { }

  userdata= {
    username:'',
    email:'',
    password:'',
    cpassword:''}

  ngOnInit(){
    this.header.show();
    this.nav.hide();
  }
 
onSubmit(){ 

  if(this.userdata.cpassword==this.userdata.password){
  
    this.signupService.newUserData(this.userdata)
    .subscribe(
      // data =>{console.log(data)},
      res =>{
        alert('User form is valid!!')
        this._router.navigate(['/login']);
      },

      err => {
        this._router.navigate(["sign-up"]);
        alert("User already exists");
      }
    )
    
  }
  else{
    alert('User form is invalid!!, Confirm password does not match');
  }
}
}
