import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FastfoodPage } from '../fastfood/fastfood';
import { DishPage } from '../dish/dish';
import { DrinkPage } from '../drink/drink';
import { SweetPage } from '../sweet/sweet';
import { NewactivityPage } from '../newactivity/newactivity';
import { Storage } from '@ionic/storage';
import { AboutmePage } from '../aboutme/aboutme';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
todolist:any[]=[];
temp:any={table:"",fastfood:"",desfast:""};

 constructor(public navCtrl: NavController, public storage:Storage) {
  this.storage.get('todoDetails').then((val)=>{
    this.todolist=val;
  });
  }
  ngOnInit(){
    this.storage.get('todoDetails').then((val)=>{
      this.todolist=val;
    });
  }

  ionViewWillEnter(){
    this.storage.get('todoDetails').then((val)=>{
      this.todolist=val;
    });
  }

  ionViewDidEnter(){
    this.storage.get('todoDetails').then((val)=>{
      this.todolist=val;
    });
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
  goToSweet(){
    this.navCtrl.push(SweetPage);
  }
  goToNewActivity(){
    this.navCtrl.push(NewactivityPage);
  }
  goToAboutme(){
    this.navCtrl.push(AboutmePage);
  }
  
  removeItem(todo){
    let index = this.todolist.indexOf(todo);
    if(index>-1){
      this.todolist.splice(index,1);
      this.storage.set('todoDetails',this.todolist);
    }
  }

}
