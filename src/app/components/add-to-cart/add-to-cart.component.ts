import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit{
  imgUrl:any;
  ngOnInit() {
    this.imgUrl = environment.IMG_URL
  }

}
