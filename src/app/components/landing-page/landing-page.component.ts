import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environment/environment';
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
  Submitted = false;
  constructor(private fb: FormBuilder) {

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
