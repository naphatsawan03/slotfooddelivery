import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SidedishProvider }from '../../providers/sidedish/sidedish';
/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage {
  dish:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:SidedishProvider) {
    var id = this.navParams.get('id');
    this.data.loadById(id).then(result=>{
      this.dish = result;
    });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

}
