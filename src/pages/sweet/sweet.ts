import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DessertProvider } from '../../providers/dessert/dessert';
import { SweetdetailPage } from '../sweetdetail/sweetdetail';
/**
 * Generated class for the SweetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sweet',
  templateUrl: 'sweet.html',
})
export class SweetPage {
  dessert :any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:DessertProvider) {
    this.data.loadAll().then(result=>{
      this.dessert=result;
    });
  }
  goToSweetdetail(sweetId:any){
    this.navCtrl.push(SweetdetailPage,{ id : sweetId });
    }
}
