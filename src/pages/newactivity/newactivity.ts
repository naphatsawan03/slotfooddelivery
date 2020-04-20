import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators,FormGroup,FormBuilder } from '@angular/forms';
/**
 * Generated class for the NewactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newactivity',
  templateUrl: 'newactivity.html',
})
export class NewactivityPage {
  fromActivity:FormGroup;
  table:any;
  fastfood:any;
  desfast:any;
 
  addedTodo:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public formBuilder:FormBuilder) {
    this.storage=storage;
    this.fromActivity=this.formBuilder.group({
      table:['',Validators.required],
      fastfood:['',Validators.required],
      desfast:['',Validators.required],
     
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewactivityPage');
  }
  saveRecord(){
    if(this.fromActivity.valid){
      let todoObj={table: "",fastfood: "", desfast: "" };
      todoObj.table=this.table;
      todoObj.fastfood=this.fastfood;
      todoObj.desfast=this.desfast;
  

      this.storage.get('todoDetails').then((val)=>{
        if(val){
          this.addedTodo=val;
          this.addedTodo.push(todoObj);
          this.storage.set('todoDetails',this.addedTodo);
        }else{
          this.addedTodo.push(todoObj);
          this.storage.set('todoDetails',this.addedTodo);
        }
        this.table="";
        this.fastfood="";
        this.desfast="";
      

        this.navCtrl.pop();
      });
    }
  }
}
