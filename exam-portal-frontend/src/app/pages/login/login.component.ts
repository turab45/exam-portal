import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

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
  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit() {
    // request to server to generate token
    this.loginService.generateToken(this.user).subscribe(
      (data: any) => {

        this.loginService.loginUser(data.token);

        this.loginService.getCurrentUser().subscribe(
          (user: any)=>{
            this.loginService.setUSer(user);

            // admin: admin dashboard
            if(this.loginService.getUserRole() == 'ADMIN'){
              this.router.navigate(['/admin']);
            }else if(this.loginService.getUserRole() == 'NORMAL'){
              this.router.navigate(['/user-dashboard']);
            }else{
              Swal.fire('Invalid details!', 'Username and password incorrect', 'error')
            }
            // normal: normal dashboard
          }
        );

      }, (error) => {
        Swal.fire('Invalid details!', 'Username and password incorrect', 'error')
      }
    );;

  }


}
