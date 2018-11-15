import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuotedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotedetail',
  templateUrl: 'quotedetail.html',
  
})
export class QuotedetailPage {
  quote;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quote = this.navParams.get('quote');
    console.log(this.quote);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotedetailPage');
    
  }

}
