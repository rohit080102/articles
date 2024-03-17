import { RefreshService } from './../../services/refresh.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import { Userloginfo } from '../userloginfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
  })
  constructor(private formbuilder: FormBuilder,
    private accountservice: AccountserviceService,
    private router: Router,
    private refreshService: RefreshService) { }

  ngOnInit(): void {
    this.setFormState();
  }

  setFormState(): void {
    this.loginForm
  }




  datasaved = false;
  message: string | any;
  status: string | any;

  onSubmit() {

    let userinfo: any = this.loginForm.value;
    console.log(userinfo)
    this.userLogin(userinfo);
    // this.loginForm.reset();
  }

  userLogin(logininfo: Userloginfo) {
    this.accountservice.userlogin(logininfo).subscribe(
      (resResult: any) => {
        let resp = JSON.stringify(resResult);
        console.log(resp);
        this.datasaved = true;
        this.message = resResult['msg'];
        this.status = resResult['status'];
        if (resResult['status'] == 'success') {
          localStorage.setItem('Loginuser', resp)
        } else {
          localStorage.removeItem('Loginuser');
        }
        this.loginForm.reset();
        this.router.navigate(["/"])
        this.refreshService.triggerRefresh();
      }
    )
  }
}
