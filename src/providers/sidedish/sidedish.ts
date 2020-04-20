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
        predetail: "แกงจืดถ้วยใหญ่เสิรฟ์กับข้าวร้อนๆ รสชาติกลมกล่อม จัดเต็มกับเต้าหู้และสาหร่ายและหมูสับ",
        image: "https://xn--q3cp7eza.net/media/images/recipe/%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%88%E0%B8%B7%E0%B8%94%E0%B8%9F%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%95%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%B9%E0%B9%89%E0%B9%84%E0%B8%82%E0%B9%88%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AA%E0%B8%B1%E0%B8%9A.jpg",
      },
      {
        id: 2,
        type: "กับแกล้ม",
        name: "ต้มยำทะเล",
        detail: "ราคา 80 บาท",
        predetail: "ทะเลสดส่งตรงจากทะเลมาถึงร้าน เครื่องแกงรสชาตินัวไม่จัดจนเกินไปเด็กสามารถทานได้ เนื้อสัตว์จัดเต็มในถ้วย",
        image: "https://sites.google.com/site/ranxaharkhrawkhunxaemp/_/rsrc/1468751314868/home/Image%20%281%29.jpg",
      },
      {
        id: 3,
        type: "กับแกล้ม",
        name: "ผัดผัก",
        detail: "ราคา 50 บาท",
        predetail: "ผัดผักมีให้เลือก ผัดถั่วลันเตา ผัดบล็อกเคอรี่ ผัดกะหล่ำปี ผัดผักรวม ในราคาเดียว 50 บาท",
        image: "https://www.kruamoomoo.com/wp-content/uploads/2019/09/pad-pak-ruam-mit-ja-recipe-kruamoomoo-40.jpg.webp",
      },
      {
        id: 4,
        type: "กับแกล้ม",
        name: "ปูผัดผงกะหรี่",
        detail: "ราคา 120 บาท",
        predetail: "กลิ่นเครื่องแกงไม่รุนแรง กลิ่นหอมนุ่มๆ ผัดพร้อมกับปูตัวใหญ่ๆ มีเนื้อสัตว์ให้เลือก ไม่ว่าจะเป็น ปู กุ้ง ปลาหมึก",
        image: "https://www.noobeebee.com/wp-content/uploads/2017/12/2.png",
      },
      {
        id: 5,
        type: "กับแกล้ม",
        name: "ไก่ทอดทั้งตัว",
        detail: "ราคา 150 บาท",
        predetail: "ไก่บ้านแท้เนื้อกรอบนุ่ม นำมาทอดทั้งตัวได้ความชุ่มฉ่ำจากน้ำไก่รสชาติหวานของเนื้อไก่แท้ๆ",
        image: "http://www.thaiticketmajor.com/variety/img_content/imgeditor/kfc-efbc93.jpg",
      },
      {
        id: 6,
        type: "กับแกล้ม",
        name: "แกงเขียวหวาน",
        detail: "ราคา 80 บาท",
        predetail: "แกงเขียวหวานยอดมะพร้าวอ่อน ระบุเนื้อสัตว์ได้มีทั้ง หมู ไก่ และทะเล",
        image: "https://img.kapook.com/u/pirawan/Cooking1/green%20curry.jpg",
      },
      {
        id: 7,
        type: "กับแกล้ม",
        name: "ห่อหมกมะพร้าว",
        detail: "ราคา 120 บาท",
        predetail: "ห่อหมกทะเลผสมมะพร้าวขูดรสชาติกลมกล่อม ห่อหมกอบในมะพร้าวทำให้มีกลิ่นหอมของมะพร้าวเพิ่มขึ้นอีก",
        image: "https://www.maeban.co.th/upfiles/blog/%E0%B8%AB%E0%B9%88%E0%B8%AD%E0%B8%AB%E0%B8%A1%E0%B8%81%E0%B8%A1%E0%B8%B0%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%99.jpg",
      },
      {
        id: 8,
        type: "กับแกล้ม",
        name: "ต้มยำปลาคัง",
        detail: "ราคา 150 บาท",
        predetail: "ปลาคังทั้งตัว ใส่กับเครื่องแกงต้มยำแท้มีกลิ่นหอมของต้มยำรสชาติกลมกล่อมไม่ใส่ผงชูรส",
        image: "https://3.bp.blogspot.com/-Ys79QPJXzY8/VBksdT4YkAI/AAAAAAAAABc/2HyO1uo-BW0/s1600/%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%A2%E0%B8%B3%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%84%E0%B8%B1%E0%B8%87.JPG",
      },
      {
        id: 9,
        type: "กับแกล้ม",
        name: "แกงส้ม",
        detail: "ราคา 80 บาท",
        predetail: "แกงส้มมีให้เลือกหลายแบบ มีแกงส้มเนื้อสัตว์อย่างเดียว หมู ไก่ ทะเล แกงส้มชะอมไข่กุ้ง แกงส้มดอกแคร์ แกงส้มผัก 3 รส",
        image: "https://www.knorr.com/content/dam/unilever/global/recipe_image/117/11785/117853-default.jpg/_jcr_content/renditions/cq5dam.web.800.600.jpeg",
      },
      {
        id: 10,
        type: "กับแกล้ม",
        name: "ทอดมันกุ้ง",
        detail: "ราคา 50 บาท",
        predetail: "ทอดมันกุ้งมีกลิ่นเครื่องเทศหอมรสชาติกรอบนุ่มไม่เหนียว ไม่มีส่วนผสมทำให้เผ็ดจนเกินไป",
        image: "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/34f65914-d21a-4460-b955-d480e8bb7d0b.jpg",
      },
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
