import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeliveryProvider } from '../../providers/delivery/delivery';
import { FastfooddetailPage } from '../fastfooddetail/fastfooddetail';

@IonicPage()
@Component({
  selector: 'page-fastfood',
  templateUrl: 'fastfood.html',
})
export class FastfoodPage {
  delivery :any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:DeliveryProvider) {
    this.data.loadAll().then(result=>{
      this.delivery=result;
    });
  }
  goToFastfooddetail(fastId:any){
    this.navCtrl.push(FastfooddetailPage,{ id : fastId });
    }
}


