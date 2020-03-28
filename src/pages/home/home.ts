import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FastfoodPage } from '../fastfood/fastfood';
import { DishPage } from '../dish/dish';
import { DrinkPage } from '../drink/drink';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 constructor(public navCtrl: NavController) {

  }
  goToFastfood(){
    this.navCtrl.push(FastfoodPage);
  }
  goToDish(){
    this.navCtrl.push(DishPage);
  }
  goToDrink(){
    this.navCtrl.push(DrinkPage);
  }
}
