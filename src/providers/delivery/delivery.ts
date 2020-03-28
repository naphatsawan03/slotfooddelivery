import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DeliveryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeliveryProvider {
  data : any;
  constructor(public http: HttpClient) {
  this.data=[
      {
        id: 1,
        type: "อาหารจานด่วน",
        name: "ข้าวผัด",
        detail: "ราคา 40 บาท",
        image: "https://food.mthai.com/app/uploads/2017/02/fried-rice.jpg",
      },
      {
        id: 2,
        type: "อาหารจานด่วน",
        name: "ผัดซีอิ๊ว",
        detail: "ราคา 35 บาท",
        image: "https://i.ytimg.com/vi/74r4F5dtTDw/maxresdefault.jpg",
      },
      {
        id: 3,
        type: "อาหารจานด่วน",
        name: "ข้าวผัดกระเพรา",
        detail: "ราคา 40 บาท",
        image: "https://c.min.ms/a/0/111/zfyjrl9dzi.jpg",
      },
      {
        id: 4,
        type: "อาหารจานด่วน",
        name: "ข้าวไข่เจียว",
        detail: "ราคา 20 บาท",
        image: "https://f.ptcdn.info/689/035/000/1442885991-imagejpeg-o.jpg",
      }
    ];
    
  }
  loadAll(){
    return Promise.resolve(this.data);
  }
  loadById(fastId:any){
    // for(var i=0;i<(this.data).length;i++){
    //   if(this.data[i].id == id){
    //     return Promise.resolve(this.data[i]);
    //   }
    // }
    let fastfood = this.data.find( ({id}) => id===fastId );
    return Promise.resolve(fastfood);
  }

}
