import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PotationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PotationProvider {
data: any;
  constructor(public http: HttpClient) {
    this.data=[
      {
        id: 1,
        type: "เครื่องดื่ม",
        name: "น้ำเปล่า",
        detail: "ราคา 6 บาท",
        image: "https://backend.tops.co.th/media/catalog/product/8/8/8851952350147.jpg",
      },
      {
        id: 2,
        type: "เครื่องดื่ม",
        name: "น้ำส้ม",
        detail: "ราคา 50 บาท",
        image: "https://miro.medium.com/max/3840/0*IOfs-ElckK0qsTOs.jpg",
      },
      {
        id: 3,
        type: "เครื่องดื่ม",
        name: "น้ำสมุนไพร",
        detail: "ราคา 20 บาท",
        image: "https://f.ptcdn.info/538/006/000/1372058692-20-o.jpg",
      },
      {
        id: 4,
        type: "เครื่องดื่ม",
        name: "เบียร์ช้าง",
        detail: "ราคา 40 บาท",
        image: "https://i.pinimg.com/originals/6e/eb/42/6eeb420fce1261a5f07058f7696a69a0.jpg",
      }
    ];
    
  }
  loadAll(){
    return Promise.resolve(this.data);
  }
  loadById(drinkId:any){
    // for(var i=0;i<(this.data).length;i++){
    //   if(this.data[i].id == id){
    //     return Promise.resolve(this.data[i]);
    //   }
    // }
    let drink = this.data.find( ({id}) => id===drinkId );
    return Promise.resolve(drink);
  }
}
