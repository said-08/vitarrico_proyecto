import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public urlLogo: string;
  public usuario: string = "";
  public password: string = "";

  logInForm: FormGroup = new FormGroup({usuario: new FormControl("", [
    Validators.required,
    Validators.maxLength(60),
  ]),
  password: new FormControl("", [
    Validators.required,
    Validators.maxLength(60),
  ]),
})

  constructor() {
    this.urlLogo="../../../assets/vitarrico.png"
   }

  ngOnInit(): void {
    // emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  }

}
