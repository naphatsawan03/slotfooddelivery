import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SidedishProvider } from '../../providers/sidedish/sidedish';
import { DishdetailPage } from '../dishdetail/dishdetail';
/**
 * Generated class for the DishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dish',
  templateUrl: 'dish.html',
})
export class DishPage {
  sidedish:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:SidedishProvider) {
    this.data.loadAll().then(result=>{
      this.sidedish=result;
    });
  }
  goToDishdetail(sideId:any){
    this.navCtrl.push(DishdetailPage,{ id : sideId });
    }
  }


