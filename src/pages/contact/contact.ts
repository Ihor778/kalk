import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuotesProvider} from '../../providers/quotes/quotes';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  quotes;

  constructor(public navCtrl: NavController, private quotesProvider: QuotesProvider) {
    this.quotesProvider.getQuotes().subscribe(data => {
      console.log(data);
      this.quotes = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

  onShowQuoteDetail(quote){
    this.navCtrl.push('QuotedetailPage', {quote: quote});
  }
  

  onGoToCreateQuote(){
    this.navCtrl.push('CreateQuotePage')
  }
}
