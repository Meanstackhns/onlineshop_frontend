import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
declare let $: any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormBuilder | any;
  registerValidation: any;
  imageUrl: any;
  isOtpSent     = false;
  buttonText    = "Continue";
  Submitted     = false
  isMobileScreen = false
  screenWidth : any
  constructor(private fb: FormBuilder,private router:Router) {

  }
  ngAfterViewInit() {
    $('#loginMbl').click(() => {
      console.log('show');
      $('.mNo').addClass('addTrans')
      $('.label').addClass('addTrans')
    })
    $('#loginMbl').blur(() => {
      console.log('show');
      $('.mNo').addClass('addTrans')
      $('.label').addClass('addTrans')
    })
  }
  @HostListener('window:resize', ['$event'])  
  onResize(event: any) {  
    this.screenWidth = window.innerWidth;  
    
    if(this.screenWidth < 600){
        this.isMobileScreen = true
    }
    else{
        this.isMobileScreen = false
        this.router.navigateByUrl('landing-page')
    }
    
  } 
  ngOnInit() {
    this.imageUrl = environment.IMG_URL
    this.registerForm = this.fb.group({
      mobile_number: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      name: [null, [Validators.required, Validators.pattern('/^[a-zA-Z]+$/')]],
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: [null, [Validators.required]]
    })
    this.screenWidth = window.innerWidth;  
   
    if(this.screenWidth < 600){
        this.isMobileScreen = true
    }
    else{
      this.isMobileScreen = false;
      this.router.navigateByUrl('landing-page')
    }
  }
  registerSubmit() {
    this.registerValidation = true
    console.log('hello your are click register');
    if (this.registerForm.invalid) {
      return
    }
  }

  SignIn() {
    this.registerValidation = true
    console.log('hello your are click register');
    if (this.registerForm.invalid) {
      return
    }
    else{
      this.isOtpSent = true
    }
    this.buttonText = "Verify"
    
  }
  VerifyOtp() {
    // this.isOtpSent = true
  }
  Back() {
    this.router.navigate(['/login'])
  }
}
