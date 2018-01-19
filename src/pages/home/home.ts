import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  images: any = [];
  constructor(public navCtrl: NavController, public imagePicker: ImagePicker) {

  }
  getPictures(){ 
    this.imagePicker.getPictures({
    }).then( results =>{
      console.log(results);
      for(let i=0; i < results.length;i++){
        this.images.push(results[i]);
      };
    });
  }

}
