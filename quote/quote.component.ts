import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes =[
    new Quote(1,"My life is my message.","Mahatma Gandhi",0,0,new Date(2017,6,22)),
    new Quote(2,"Be happy for this moment. This moment is your life.","Omar Khayyam",0,0,new Date(2017,6,22)),
    new Quote(3,"Get busy living or get busy dying.","Stephen King",0,0,new Date(2017,6,22)),
        ];
  toggleDetails(index){
    this.quotes[index].showAuthor=!this.quotes[index].showAuthor;
  }
  upvote(index){
    this.quotes[index].upvotes++;
  }
  downvote(index){
    this.quotes[index].downvotes++;
  }
  deleteQuote(isComplete,index){
         if (isComplete){
             let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
              if(toDelete){
                 this.quotes.splice(index,1)
             }
         }
     }
     addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id=quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
   }
  constructor() { }
   ngOnInit() {
  }
 }