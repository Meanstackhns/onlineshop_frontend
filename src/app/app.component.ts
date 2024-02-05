import { Component, OnInit } from '@angular/core';
import { HttpService } from './core/service/http/http.service';
import { apiConstant } from './core/constants/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  themeColor:any
  constructor(private httpSevice: HttpService) {

  }
  ngOnInit() {
   this.themeJson()
  }
  themeJson(){
    this.httpSevice.jsonGet(apiConstant.themeColor).subscribe((res: any) => {
      console.log(res);
      this.themeColor = res.themeColor
      this.ChangeThemeColor(this.themeColor)
    })
  }
  ChangeThemeColor(val:any){
    const primary = val
    const secondary = val+25
    document.documentElement.style.setProperty('--primary',primary);
    document.documentElement.style.setProperty('--secondary',secondary);
  }
  title = 'food-delivery';
}
