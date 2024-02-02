import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  imageUrl:any;
  ngOnInit() {
    this.imageUrl = environment.IMG_URL
  }

}
