import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SidedishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SidedishProvider {
  data : any;
  constructor(public http: HttpClient) {
    this.data=[
      {
        id: 1,
        type: "กับแกล้ม",
        name: "แกงจืดสาหร่ายเต้าหู้อ่อน",
        detail: "ราคา 60 บาท",
        image: "https://xn--q3cp7eza.net/media/images/recipe/%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%88%E0%B8%B7%E0%B8%94%E0%B8%9F%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%95%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%B9%E0%B9%89%E0%B9%84%E0%B8%82%E0%B9%88%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AA%E0%B8%B1%E0%B8%9A.jpg",
      },
      {
        id: 2,
        type: "กับแกล้ม",
        name: "ต้มยำทะเล",
        detail: "ราคา 80 บาท",
        image: "https://sites.google.com/site/ranxaharkhrawkhunxaemp/_/rsrc/1468751314868/home/Image%20%281%29.jpg",
      },
      {
        id: 3,
        type: "กับแกล้ม",
        name: "ผัดผัก",
        detail: "ราคา 50 บาท",
        image: "https://www.kruamoomoo.com/wp-content/uploads/2019/09/pad-pak-ruam-mit-ja-recipe-kruamoomoo-40.jpg.webp",
      },
      {
        id: 4,
        type: "กับแกล้ม",
        name: "ปูผัดผงกะหรี่",
        detail: "ราคา 120 บาท",
        image: "https://www.noobeebee.com/wp-content/uploads/2017/12/2.png",
      }
    ];
      
  }
  loadAll(){
    return Promise.resolve(this.data);
  }
  loadById(sideId:any){
    // for(var i=0;i<(this.data).length;i++){
    //   if(this.data[i].id == id){
    //     return Promise.resolve(this.data[i]);
    //   }
    // }
    let dish = this.data.find( ({id}) => id===sideId );
    return Promise.resolve(dish);
  }
}
