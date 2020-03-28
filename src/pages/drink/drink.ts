import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PotationProvider } from '../../providers/potation/potation';
import { DrinkdetailPage } from '../drinkdetail/drinkdetail';
@IonicPage()
@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html',
})
export class DrinkPage {
  potation:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:PotationProvider) {
    this.data.loadAll().then(result=>{
      this.potation=result;
    });
  }
  goToDrinkdetail(drinkId:any){
    this.navCtrl.push(DrinkdetailPage,{ id : drinkId });
    }
}
