import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    name: '',
    password: '',
    email: '',
    phone: ''
  }
  constructor(private userService: UserServiceService) {
  }


  ngOnInit(): void {
  }

  formSubmit(register:NgForm) {
    this.userService.addUser(this.user).subscribe(
      (data) => {
        Swal.fire('Registered successfully.', 'You have been registered successfully.', 'success')
        console.log(data);
        register.reset();
      },
      (error) => {
        Swal.fire('Oops...', 'Something went wrong!', 'error')
        console.log(error);
      }
    );;
  }

}
