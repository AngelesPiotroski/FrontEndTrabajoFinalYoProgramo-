import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  confirmPassword: string;
  passwordError: boolean;

  constructor(public userService: UserService) {}

  // register() {
  //   const user = { email: this.email, password: this.password };
  //   this.userService.register(user).subscribe(data => {
  //     console.log(data);
  //   });
  // }
  ngOnInit(): void {
  }

}
