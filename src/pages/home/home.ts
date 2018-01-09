import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
public dataToStore;
  constructor(public navCtrl: NavController,private storage: Storage) {
    this.dataToStore={
      name:'Prantik',
      site:'pointDeveloper.com'
    }
  }

  setValue(){
    this.storage.set("object",this.dataToStore).then((successData)=>{
      console.log("Data Stored");
      console.log(successData);
    })
  }
  getValue(){
    this.storage.get("object").then((data)=>{
      console.log(data);
    })
  }

}
