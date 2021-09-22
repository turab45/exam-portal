import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {
    username: '',
    password: ''
  }
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  formSubmit() {
    alert("submitted..");
    // request to server to generate token
    this.loginService.generateToken(this.user).subscribe(
      (success: any) => {
        console.log(success);
      }, (error) => {
        console.log(error);
      }
    );;

  }


}
