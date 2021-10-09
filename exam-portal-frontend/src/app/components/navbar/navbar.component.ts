import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  public logout(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be looged out.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout'
    }).then((result) => {
      if (result.isConfirmed) {
        this.loginService.logout();
    this.router.navigate(['/login']);
      }
    })
    
  }

}
