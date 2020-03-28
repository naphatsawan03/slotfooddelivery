import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DessertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DessertProvider {
  data: any;
  constructor(public http: HttpClient) {
    this.data=[
      {
        id: 1,
        type: "ขนมหวาน",
        name: "ฮันนี่โทส",
        detail: "ราคา 120 บาท",
        image: "https://sites.google.com/site/menuphelinphung/_/rsrc/1485673674756/han-ni-thos/20151101_3_1446391128_802347.jpg",
      },
      {
        id: 2,
        type: "ขนมหวาน",
        name: "เค้กลาวา",
        detail: "ราคา 150 บาท",
        image: "https://food.mthai.com/app/uploads/2019/05/Cake-with-Bubble-38.jpg",
      },
      {
        id: 3,
        type: "ขนมหวาน",
        name: "บิงซูถาด",
        detail: "ราคา 220 บาท",
        image: "https://img.wongnai.com/p/1920x0/2016/08/18/0682bb1a791547ca8e7221b23c68fe1d.jpg",
      },
      {
        id: 4,
        type: "ขนมหวาน",
        name: "บิงซูทุเรียน",
        detail: "ราคา 340 บาท",
        image: "https://img.kapook.com/u/2017/Tanapol/travel/bingsu/bingsu6_1.jpg",
      }
    ];
  }
  loadAll(){
    return Promise.resolve(this.data);
  }
  loadById(sweetId:any){
    // for(var i=0;i<(this.data).length;i++){
    //   if(this.data[i].id == id){
    //     return Promise.resolve(this.data[i]);
    //   }
    // }
    let sweet = this.data.find( ({id}) => id===sweetId );
    return Promise.resolve(sweet);
  }
}
