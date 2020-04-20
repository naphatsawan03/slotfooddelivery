import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
allfriends =[
  {
    id:1,
    name:"เบอร์ฝ่ายเดลิเวอรี่",
    phone:"0965415441",
    image:"assets/imgs/delivery.jpeg"
  },
  {
    id:2,
    name:"เบอร์ฝ่ายขาย",
    phone:"0998764839",
    image:"assets/imgs/ขาย.jpeg"
  },
  {
    id:3,
    name:"เบอร์ฝ่ายประชาสัมพันธ์",
    phone:"0924167859",
    image:"assets/imgs/ประชาสัมพันธ์.jpeg"
  },
  {
    id:4,
    name:"เบอร์ฝ่ายรับเรื่องร้องเรียน",
    phone:"0992390087",
    image:"assets/imgs/ร้องเรียน.png"
  },
  {
    id:5,
    name:"เบอร์ฝ่ายรับเรื่องชื่นชมพนักงาน",
    phone:"0991324569",
    image:"assets/imgs/ชื่นชม.jpeg"
  }
];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }

}
