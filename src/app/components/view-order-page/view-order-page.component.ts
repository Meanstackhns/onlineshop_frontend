import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiConstant } from 'src/app/core/constants/constant';
import { HttpService } from 'src/app/core/service/http/http.service';
import { environment } from 'src/environment/environment';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-view-order-page',
  templateUrl: './view-order-page.component.html',
  styleUrls: ['./view-order-page.component.scss']
})
export class ViewOrderPageComponent implements OnInit {
  deliveryTime: any;
  imgUrl: any;
  foodMenu: any;
  foodList: any;
  screenWidth: any;
  isMobileScreen: boolean = false
  show: boolean = false;
  foodNavbar: any;
  foodNavbar1: any;
  selectedMenu: any;
  constructor(private httpService: HttpService,private router:Router) {

  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);

    if (this.screenWidth < 768) {
      this.isMobileScreen = true
    }
    else {
      this.isMobileScreen = false
    }

  }
  mainBannerConfig: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: false,
    autoplay: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  }
  ngOnInit() {
    this.imgUrl = environment.IMG_URL
    this.viewOrder()

    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);

    if (this.screenWidth < 768) {
      this.isMobileScreen = true
    }
    else {
      this.isMobileScreen = false
    }
  }

  viewOrder() {
    this.httpService.jsonGet(apiConstant.viewOrder).subscribe((res: any) => {
      console.log(res);
      this.foodMenu = res.foodMenu
      this.foodList = res.foodList
      this.foodNavbar = res.foodNavbar
      this.foodNavbar1 = res.foodNavbar1
      for (let j of this.foodMenu) {
       this.selectedMenu = this.foodMenu[0]
      }
      console.log(this.selectedMenu);
    })
  }
  selectFoodMenu(val:any){
    console.log(val);
    this.selectedMenu = val
  }
  goToViewPage(){
    this.router.navigateByUrl('/view-page')
  }
}
