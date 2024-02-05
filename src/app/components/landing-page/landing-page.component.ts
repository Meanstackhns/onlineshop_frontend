import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { SwiperOptions } from 'swiper';
declare let $: any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  loginForm: FormBuilder | any;
  imageUrl: any;
  isMobileScreen = false
  screenWidth: any
  isAlreadyUser = true;
  buttonText = "Continue";
  isOtpSent = false;
  LoginClicked = false
  Submitted = false;
  constructor(private fb: FormBuilder,private router:Router) {

  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;

    if (this.screenWidth < 768) {
      this.isMobileScreen = true
    }
    else {
      this.isMobileScreen = false
    }

  }
  // ngAfterViewInit() {
  //   $('#loginMbl').click(() => {
  //     console.log('show');
  //     $('.mNo').addClass('addTrans')
  //     $('.label').addClass('addTrans')
  //   })
  //   $('#loginMbl').blur(() => {
  //     console.log('show');
  //     $('.mNo').addClass('addTrans')
  //     $('.label').addClass('addTrans')
  //   })
  // }
  ngOnInit() {
    this.imageUrl = environment.IMG_URL
    this.loginForm = this.fb.group({
      mobile_number: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    });

    this.screenWidth = window.innerWidth;

    if (this.screenWidth < 768) {
      this.isMobileScreen = true
    }
    else {
      this.isMobileScreen = false
    }

  }
  Goto(value:any){
    if(value=='login'){
      this.LoginClicked = true
      this.router.navigate(['/landing-page/login'])
    }
    if(value == 'signup'){
      console.log('SignUp');
      this.LoginClicked = false
      console.log(this.LoginClicked);
      this.router.navigate(['/landing-page/register']) 
    }

  }
  Login() {
    this.Submitted = true
    if (this.loginForm.valid) {
      this.isOtpSent = true
      this.isAlreadyUser = false;
    }
    else {
      return
    }

  }
  VerifyOtp() {

  }
  Back() {
    this.isOtpSent = false
  }

  // leaveTrans() {
  //   $('.mNo').removeClass('addTrans')
  //   $('.label').removeClass('addTrans')
  // }
}
