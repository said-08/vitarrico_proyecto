import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { UserService } from './log-in.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public urlLogo: string;
  public usuario: string = "";
  public password: string = "";
  public logInForm: FormGroup;
  

  constructor(
    private router: Router,
    ) {
    this.urlLogo="../../../assets/vitarrico.png";
    this.logInForm = new FormGroup({
      usuario: new FormControl("", [
      Validators.required,
      Validators.maxLength(60),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.maxLength(60),
    ]),
  })
   }

  ngOnInit(): void {
    // console.log('se inició esta damier');
    // this.userService.getAll().subscribe(res => console.log('aqui estoy'+res))
  }

  logIn(){
    this.router.navigate(["/Home"]);
  }

}
