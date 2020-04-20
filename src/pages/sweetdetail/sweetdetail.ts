import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DessertProvider }from '../../providers/dessert/dessert';
/**
 * Generated class for the SweetdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sweetdetail',
  templateUrl: 'sweetdetail.html',
})
export class SweetdetailPage {
  sweet:any=0;
 
  constructor(public navCtrl: NavController, public navParams: 
  NavParams, public data:DessertProvider) {
    
    var id = this.navParams.get('id');
    this.data.loadById(id).then(result=>{
      this.sweet = result;
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SweetdetailPage');
  }

}
