import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbarservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _router:Router, public header: HeaderService, public nav: NavbarService) { }

  user={email:'',
  password:''}

  ngOnInit() {
    this.header.show();
    this.nav.hide();
  }

  loginUser () {
    
    this._auth.loginUser(this.user)
    .subscribe(
      res => {

        if(this.user.email == "admin123@gmail.com" && this.user.password == "Admin@123"){
          localStorage.setItem('token', res.token);
        }
          this._router.navigate(['/admin']);
      },
      err => {
        console.log(err);
        alert('Invalid login credentials')
        this._router.navigate(['/login'])
      }
    ) 
  }

}
