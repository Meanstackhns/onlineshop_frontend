import { Component, HostListener } from '@angular/core';
import { apiConstant } from 'src/app/core/constants/constant';
import { HttpService } from 'src/app/core/service/http/http.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent {
  constructor(private Http:HttpService){}

  @HostListener('window:resize', ['$event'])  
  onResize(event: any) {  
    this.screenWidth = window.innerWidth;  
    
    if(this.screenWidth < 768){
        this.isMobileScreen = true
    }
    else{
        this.isMobileScreen = false
    }
    
  } 
  //<----- Swiper Cofiguration ---->
  mainBannerConfig : SwiperOptions = {
    slidesPerView: 1,
    spaceBetween:20,
    navigation: false,
    autoplay:true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  }
  subBannerconfig: SwiperOptions = {
    slidesPerView: 1.1,
    spaceBetween:20,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  storeConfig: SwiperOptions = {
    slidesPerView: 1.5,
    spaceBetween:180,
    navigation: false,
    width:200,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  // <----- Variables --------->

  imgAssetsPath     :  any = '../../../assets/images'
  viewPageContent   :  any 
  mainBannerImages  :  any
  subBannerImages   :  any
  shopData          :  any
  screenWidth       :  any
  isMobileScreen    =  false
  categoryData      :  any;

  ngOnInit(){
      this.Http.jsonGet(apiConstant.viewPage).subscribe((res:any)=>{
        this.viewPageContent = res
        this.mainBannerImages = res.BannerImages;
        this.subBannerImages  = res.Sub_BannerImages;
        this.shopData   = res.ShopData
        this.categoryData = res.CategoryData;


        // <---- Sorting Based on Display Order ---->

      this.categoryData = this.categoryData.sort((a:any,b:any)=> a.displayOrder - b.displayOrder);
        // <---- Sorting Based on Display Order ---->

        this.mainBannerImages = this.mainBannerImages.sort((a:any,b:any)=> a.displayOrder - b.displayOrder);
        this.subBannerImages = this.subBannerImages.sort((a:any,b:any)=> a.displayOrder - b.displayOrder);
        this.shopData = this.shopData.sort((a:any,b:any)=> a.displayOrder - b.displayOrder);
       

        
      })

      
      this.screenWidth = window.innerWidth;  
      if(this.screenWidth < 768){
        this.isMobileScreen = true
      }
      else{
        this.isMobileScreen = false
      }
    
  }
}
