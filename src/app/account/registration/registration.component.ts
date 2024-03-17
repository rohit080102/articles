
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import { Accountinfo } from '../accountinfo';
import { Router } from "@angular/router";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
  })
  datasaved = false;
  massage: string | any;
  constructor(private formbuilder: FormBuilder, public accountservice: AccountserviceService, private router: Router) { }

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm
  }

  onSubmit = async () => {


    let userinfo: any = this.regForm.value;
    console.log(userinfo);
    this.createuserAccount(userinfo);
    this.regForm.reset();
  }
  createuserAccount(accinfo: Accountinfo) {
    this.accountservice.register(accinfo).then(
      () => {
        this.datasaved = true;
        this.massage = "User Created";
        this.regForm.reset();
        this.router.navigate(['/login']);
      }
    )
  }
}
