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
        predetail: "น้ำเปล่ามีแบรนด์ คริสตัล สิงห์ น้ำดื่มตราAM น้ำแร่มี เพอร่า อีเวียง มองเฟลอ ออร่า น้ำเปล่าราคา 6 บาททุกขวด ส่วนน้ำแร่ ราคา 20 บาททุกขวด",
        image: "https://backend.tops.co.th/media/catalog/product/8/8/8851952350147.jpg",
      },
      {
        id: 2,
        type: "เครื่องดื่ม",
        name: "น้ำส้ม",
        detail: "ราคา 50 บาท",
        predetail: "น้ำส้มคั้นสดทุกวัน ส้มสดจากไร่ธาราฟาร์มผ่านคิวซีทุกลูกก่อนส่งมาคั้น น้ำส่มไม่ใส่น้ำตาลจะเป็นน้ำส้มคั้น 100% ได้ความหวานจากส้มแท้ๆ",
        image: "https://miro.medium.com/max/3840/0*IOfs-ElckK0qsTOs.jpg",
      },
      {
        id: 3,
        type: "เครื่องดื่ม",
        name: "น้ำสมุนไพร",
        detail: "ราคา 20 บาท",
        predetail: "คั้นจากสมุนไพรสด มี น้ำใบบัวบก น้ำอัญชัน น้ำขิงเย็น น้ำเก็กฮวย น้ำกระเจี๊ยบ",
        image: "https://f.ptcdn.info/538/006/000/1372058692-20-o.jpg",
      },
      {
        id: 4,
        type: "เครื่องดื่ม",
        name: "เบียร์ช้าง",
        detail: "ราคา 240 บาท",
        predetail: "สำหรับเครื่องดื่มแอลกอฮออล์ นอกจากเบียร์ช้างแล้วก็จะมีเบียร์นำเข้าจากต่างประเทศราคา 3600-19000 และไวน์นำเข้าจากต่างประเทศราคา 500-9300",
        image: "https://i.pinimg.com/originals/6e/eb/42/6eeb420fce1261a5f07058f7696a69a0.jpg",
      },
      {
        id: 5,
        type: "เครื่องดื่ม",
        name: "ไวน์องุ่น",
        detail: "ราคา 2560 บาท",
        predetail: "องุ่นแท้จากนิวซีแลนด์ ผ่านคิวซีทุกลูกก่อนการนำมาผ่านกระบวนการหมัก ทำให้มีรสชาติแอลกอฮออล์ที่ไม่แรงเกินไปดื่มง่าย และเปอร์เซ็นแอลกอฮออล์ไม่สูงมาก",
        image: "https://d.lnwfile.com/1s3jjl.png",
      },
      {
        id: 6,
        type: "เครื่องดื่ม",
        name: "วิสกี้",
        detail: "ราคา 400 บาท",
        predetail: "เปอร์เซ็นแอลกอฮออล์ค่อนข้างสูง ไม่แนะนำให้ดื่มเยอะรสชาติค่อนข้างขมเหมาะกับคนคอแข็ง",
        image: "https://sc01.alicdn.com/kf/UTB8Tr5cgHPJXKJkSafS761qUXXaE/Best-Prices-Jack-Daniels-whiskey-for-sale.png_350x350.png",
      },
      {
        id: 7,
        type: "เครื่องดื่ม",
        name: "น้ำอัดลม",
        detail: "ราคา 40 บาท",
        predetail: "มีให้เลือก น้ำเป็ปซี่ โค้ก น้ำแดง น้ำเขียว น้ำสไปรท์",
        image: "https://d8xxy3dl0iwm6.cloudfront.net/wp-content/uploads/2018/04/open_softdrink.png",
      },
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
