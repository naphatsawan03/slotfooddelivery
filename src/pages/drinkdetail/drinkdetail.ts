import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PotationProvider }from '../../providers/potation/potation';
/**
 * Generated class for the DrinkdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drinkdetail',
  templateUrl: 'drinkdetail.html',
})
export class DrinkdetailPage {
  drink:any=0;
  constructor(public navCtrl: NavController, public navParams: 
  NavParams, public data:PotationProvider) {
    var id = this.navParams.get('id');
    this.data.loadById(id).then(result=>{
      this.drink = result;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkdetailPage');
  }

}
