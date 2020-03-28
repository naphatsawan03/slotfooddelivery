import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeliveryProvider }from '../../providers/delivery/delivery';
/**
 * Generated class for the FastfooddetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fastfooddetail',
  templateUrl: 'fastfooddetail.html',
})
export class FastfooddetailPage {
  fastfood:any=0;
  constructor(public navCtrl: NavController, public navParams: 
  NavParams, public data:DeliveryProvider) {
    var id = this.navParams.get('id');
    this.data.loadById(id).then(result=>{
      this.fastfood = result;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacedetailPage');
  }

}
