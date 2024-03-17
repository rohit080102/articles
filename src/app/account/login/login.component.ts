import { AppStorage } from './../../core/utilities/app-storage';
import { swalHelper } from './../../core/constants/swal-helper';
import { RefreshService } from './../../services/refresh.service';
import { Router } from '@angular/router';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import { Userloginfo } from '../userloginfo';
import { ToastHelper } from 'src/app/core/constants/toast.helper';



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
    private refreshService: RefreshService,
    private appStorage: AppStorage) { }

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
    this.userLogin(userinfo);
    // this.loginForm.reset();
  }

  userLogin(logininfo: Userloginfo) {
    this.accountservice.login(logininfo)
      .then((response: any) => {
        let resp: any = response.Data;
        console.log(resp);

        if (response.Data != 1) {
          swalHelper.swalToast('success', response.Message, 'center')
          this.appStorage.setLocalStorage('Loginuser', resp)
          this.loginForm.reset();
          this.router.navigate(["/"])
          this.refreshService.triggerRefresh();
        }
        else {
          swalHelper.swalToast('warning', response.Message, 'center')
        }
      }
      )
  }
}
