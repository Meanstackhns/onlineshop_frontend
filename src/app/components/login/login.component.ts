import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/service/localStorage/local-storage.service';
import { environment } from 'src/environment/environment';
declare let $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  imageUrl: any;
  loginForm: FormBuilder | any;
  loginFormValid: boolean = false
  constructor(private fb: FormBuilder, private router: Router,private localStorage:LocalStorageService) {
  }
  ngOnInit() {
    this.imageUrl = environment.IMG_URL
    this.loginForm = this.fb.group({
      mobile_number: [null, [Validators.required]]
    })
  }
  goToSignUp() {
 this.router.navigateByUrl('/landing-page/register')
  }
  login() {
    this.loginFormValid = true
    if(this.loginForm.invalid){
    }
  }
}
