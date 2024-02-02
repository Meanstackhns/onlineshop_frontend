import { Component, OnInit } from '@angular/core';
import { apiConstant } from 'src/app/core/constants/constant';
import { HttpService } from 'src/app/core/service/http/http.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-view-order-page',
  templateUrl: './view-order-page.component.html',
  styleUrls: ['./view-order-page.component.scss']
})
export class ViewOrderPageComponent implements OnInit {
  deliveryTime: any;
  imgUrl: any;
  foodMenu:any;
  foodList:any;
  constructor(private httpService: HttpService) {

  }
  ngOnInit() {
    this.imgUrl = environment.IMG_URL
    this.viewOrder()
  }

  viewOrder() {
    this.httpService.jsonGet(apiConstant.viewOrder).subscribe((res: any) => {
      console.log(res);
      this.foodMenu= res.foodMenu
      this.foodList =res.foodList
    })
  }
}
