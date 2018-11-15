import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  masa: any;
  vubor: string;
  proto: any;
  ji:any;
  ugl:any;
  kkal:any;
  constructor(public navCtrl: NavController) {

  }
  kalk(){
    if (this.vubor == "dm"){
      this.kkal = 27 * this.masa
      this.proto = ((this.kkal / 100 * 30)/4)
      this.ji = ((this.kkal / 100 * 10)/9)
      this.ugl = ((this.kkal / 100 * 60)/4)
      console.log(this.proto,this.ji,this.ugl)
    }
    if (this.vubor == "cm"){
      console.log("2")
      this.kkal = 34 * this.masa
      this.proto = ((this.kkal / 100 * 30)/4)
      this.ji = ((this.kkal / 100 * 10)/9)
      this.ugl = ((this.kkal / 100 * 60)/4)
      console.log(this.proto,this.ji,this.ugl)
    }
    if (this.vubor == "um"){
      console.log("3")
      this.kkal = 43 * this.masa
      this.proto = ((this.kkal / 100 * 30)/4)
      this.ji = ((this.kkal / 100 * 10)/9)
      this.ugl = ((this.kkal / 100 * 60)/4)
      console.log(this.proto,this.ji,this.ugl)
    }
  }

}
