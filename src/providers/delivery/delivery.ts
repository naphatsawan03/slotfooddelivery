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
        predetail: "มีข้าวผัด หมู ไก่ กุ้ง ปลาหมึก ปลากระพง และข้าวผัดไข่สำหรับเด็กในราคาเดียวกล่องละ 40 บาท",
        image: "https://food.mthai.com/app/uploads/2017/02/fried-rice.jpg",
      },
      {
        id: 2,
        type: "อาหารจานด่วน",
        name: "ผัดซีอิ๊ว",
        detail: "ราคา 35 บาท",
        predetail: "ผัดซีอิ๊วมีให้เลือกเนื้อสัตว์ มี หมู ไก่ ในราคาเดียวกล่องละ 35 บาท",
        image: "https://i.ytimg.com/vi/74r4F5dtTDw/maxresdefault.jpg",
      },
      {
        id: 3,
        type: "อาหารจานด่วน",
        name: "ข้าวผัดกระเพรา",
        detail: "ราคา 50 บาท",
        predetail: "ผัดกระเพรามีให้เลือกเนื้อสัตว์มี หมู ไก่ กุ้ง ปลาหมึก สามารถสั่งระดับความเผ็ดได้ ตั้งแต่ไม่เผ็ดจนถึงเผ็ดมาก ",
        image: "https://c.min.ms/a/0/111/zfyjrl9dzi.jpg",
      },
      {
        id: 4,
        type: "อาหารจานด่วน",
        name: "ข้าวไข่เจียว",
        detail: "ราคา 20 บาท",
        predetail: "ข้าวไข่เจียวมีให้เลือกหลายไส้ ไม่ว่าเป็นไส้กุ้ง ไส้ปลาหมึก ไข่เจียวหมู ไข่เจียวไก่ ข้าวไข่เจียวแนะนำจะเป็นผัดพริกแกงไข่เจียว",
        image: "https://f.ptcdn.info/689/035/000/1442885991-imagejpeg-o.jpg",
      },
      {
        id: 5,
        type: "อาหารจานด่วน",
        name: "ข้าวผัดพริกแกง",
        detail: "ราคา 30 บาท",
        predetail: "ข้าวผัดพริกแกงมีให้เลือกเนื้อหมู ไก่ และทะเล หมู ไก่กล่องละ 30 แต่ทะเล 50 บาท",
        image: "https://www.knorr.com/content/dam/unilever/global/recipe_image/117/11740/117401-default.jpg/_jcr_content/renditions/cq5dam.web.800.600.jpeg",
      },
      {
        id: 6,
        type: "อาหารจานด่วน",
        name: "ผัดไท",
        detail: "ราคา 40 บาท",
        predetail: "ผัดไทมีให้เลือกเนื้อหมู ไก่ และทะเล หมู ไก่กล่องละ 40 แต่ทะเล 55 บาท",
        image: "https://img.kapook.com/u/2015/surauch/cook2/PT1.jpg",
      },
      {
        id: 7,
        type: "อาหารจานด่วน",
        name: "ข้าวทอดกระเทียม",
        detail: "ราคา 40 บาท",
        predetail: "ข้าวทอดกระเทียมมีให้เลือกเนื้อหมู ไก่ และทะเล หมู ไก่กล่องละ 40 แต่ทะเล 50 บาท",
        image: "https://i.ytimg.com/vi/rwnldCmiE54/maxresdefault.jpg",
      },
      {
        id: 8,
        type: "อาหารจานด่วน",
        name: "ข้าวคลุกกะปิ",
        detail: "ราคา 40 บาท",
        predetail: "ข้าวคลุกกะปิหมูหวาน สูตรดั้งเดิมจากกะปิแท้ภาคใต้ผสมความมันของสตอ กลิ่นกะปิไม่ฉุนทานง่ายคลุกเค้ากับหมูหวานฉ่ำๆ มะม่วงอ่อนสุดเปรี้ยว และพริกเผ็ดซี้ด ราคากล่องละ 40 บาท",
        image: "https://www.matichonacademy.com/wp-content/uploads/2018/07/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%84%E0%B8%A5%E0%B8%B8%E0%B8%81%E0%B8%81%E0%B8%B0%E0%B8%9B%E0%B8%B4%E0%B8%9B%E0%B8%81-992x561.jpg",
      },
      {
        id: 9,
        type: "อาหารจานด่วน",
        name: "ข้าวหน้าไก่ต้ม",
        detail: "ราคา 35 บาท",
        predetail: "ไก่ต้มอบฟางจากเมืองกาญจนบุรี ได้กลิ่นความหอมจากฟางอ่อนๆ กับข้าวมัน ราคากล่องละ 35 บาท พิเศษ 45 บาท",
        image: "https://img.kapook.com/u/surauch/movie2/chicken-rice.jpg",
      },
      {
        id: 10,
        type: "อาหารจานด่วน",
        name: "ไข่ดาว",
        detail: "ราคา 10 บาท",
        predetail: "ไข่ดาวฟองละ 10 บาท สามารถระบุให้ใส่ไข่ดาวในรายการอาหารที่สั่งได้",
        image: "https://img.horosiam.com/uppic/2017-12/08/3ca9a0e8a.jpg",
      },
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
