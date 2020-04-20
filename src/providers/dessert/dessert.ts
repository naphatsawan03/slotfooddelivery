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
        predetail: "ขนมปังกรอบชิ้นใหญ่ มี 4 ซอสให้เลือกด้วยกัน มี ช็อกโกแลต สตอเบอร์รี่ นมข้นหวาน และน้ำมะลิ ท็อปปิ้งจัดให้ตามน้ำซอสที่เลือก หรือสามารถแจ้งซื้อแยกได้",
        image: "https://sites.google.com/site/menuphelinphung/_/rsrc/1485673674756/han-ni-thos/20151101_3_1446391128_802347.jpg",
      },
      {
        id: 2,
        type: "ขนมหวาน",
        name: "เค้กลาวา",
        detail: "ราคา 150 บาท",
        predetail: "เค้กลาวาอบกลิ่นเทียนรสชาติหอมหวานไม่ซ้ำใคร เป็นเมนูแนะนำสำหรับร้าน AM ท็อปปิ้งจัดให้ตามน้ำซอสที่เลือก หรือสามารถแจ้งซื้อแยกได้",
        image: "https://food.mthai.com/app/uploads/2019/05/Cake-with-Bubble-38.jpg",
      },
      {
        id: 3,
        type: "ขนมหวาน",
        name: "บิงซูถาด",
        detail: "ราคา 220 บาท",
        predetail: "มีซอสให้เลือก 6 ซอส มี ชานม ชาเขียว ช็อกโกแลต สตอเบอร์รี่ นมข้นหวาน มะลิ ท็อปปิ้งมีให้ในถาด 6 อย่าง สามารถสั่งเพิ่มได้ท็อปปิ้งละ 25 บาท",
        image: "https://img.wongnai.com/p/1920x0/2016/08/18/0682bb1a791547ca8e7221b23c68fe1d.jpg",
      },
      {
        id: 4,
        type: "ขนมหวาน",
        name: "บิงซูทุเรียน",
        detail: "ราคา 340 บาท",
        predetail: "ทุเรียนจัดเต็มทุกถ้วย เสิรฟ์พร้อมไอศกรีมและวิปปิ้งครีมทุกถ้วย สามารถเลือกไอศกรีมได้ มี มะนาว ชาเขียว ช็อกโกแลต สตอเบอร์รี่",
        image: "https://img.kapook.com/u/2017/Tanapol/travel/bingsu/bingsu6_1.jpg",
      },
      {
        id: 5,
        type: "ขนมหวาน",
        name: "บัวลอย",
        detail: "ราคา 40 บาท",
        predetail: "บัวลอยน้ำกะทิ หอมหวานจากรสชาติกะทิแท้ เพิ่มไข่หวานฟองละ 10 บาท",
        image: "https://pbs.twimg.com/media/D4WKqdtVUAE5ogM.jpg",
      },
      {
        id: 6,
        type: "ขนมหวาน",
        name: "ทับทิมกรอบ",
        detail: "ราคา 40 บาท",
        predetail: "ทับทิมกรอบ หอมหวานจากรสชาติกะทิแท้เสิร์พร้อมน้ำแข็งในถ้วยเพิ่มความสดชื่น",
        image: "https://i.pinimg.com/originals/97/47/7c/97477c7334582d4f5bd12c68bf01a3fc.jpg",
      },
      {
        id: 7,
        type: "ขนมหวาน",
        name: "ไอศกรีมถ้วย",
        detail: "ราคา 20 บาท",
        predetail: "ไอศกรีมถ้วยมีให้เลือกหลายรสชาติ ช็อกโกแลต วนิลา สตอเบอร์รี่ มะนาว ชาเขียว โอริโอ้ ",
        image: "https://img.wongnai.com/p/1920x0/2018/02/23/9f60d198ff884e71afbc18536daa4162.jpg",
      },
      {
        id: 8,
        type: "ขนมหวาน",
        name: "บราวนี่",
        detail: "ราคา 40 บาท",
        predetail: "บราวนี่มีให้เลือกแบบเนื้อกรอบกับเนื้อนุ่มในราคาเดียว 40 บาท ",
        image: "https://www.pholfoodmafia.com/wp-content/uploads/2018/05/8GlutenFreeBrownie_big.jpg",
      },
      {
        id: 9,
        type: "ขนมหวาน",
        name: "เค้กมูส",
        detail: "ราคา 80 บาท",
        predetail: "มีให้เลือกเค้กมูสหลายแบบ มูสพีช มูสมะม่วง มูสมะพร้าว มูสมัชฉะ ในราคาเดียว 80 บาท",
        image: "https://i.ytimg.com/vi/gR5DopU2TrA/maxresdefault.jpg",
      },
      {
        id: 10,
        type: "ขนมหวาน",
        name: "ชีสเค้ก",
        detail: "ราคา 80 บาท",
        predetail: "มีให้เลือกชีสเค้กหลายแบบ สตอเบอร์รี่ชีสเค้ก ชาเชียวชีสเค้ก ช็อกโกแลตชีสเค้ก บลูเบอร์รี่ชีสเค้ก ในราคาเดียว 80 บาท",
        image: "https://img.kapook.com/u/2015/surauch/cook1/cheese-cake-3.jpg",
      },
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
