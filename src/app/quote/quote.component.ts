import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes =[
    new Quote(1,'The brain is wider than the sky', 'Emily Dickinson', new Date(2019,3,14)),
    new Quote(2,'Great things never came from comfort zones', 'Neil Strauss',new Date(2019,6,9)),
    new Quote (3, 'Your labor is your contribution to the miracle','Elizabeth Gilbert', new Date(2019,6,9))
  ]
  preNum:number
  lastNum:number
  counter:number

  toggleDetails(index){
    this.quotes[index].showAuthor=!this.quotes[index].showAuthor;
  }
  upvotes(index){
    this.quotes[index].upvotes++;
  }
  downvotes(index){
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
highestUpvote(){
  this.preNum = 0
  this.lastNum = 0

  for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
    this.lastNum = this.quotes[this.counter].upvotes;
    if(this.lastNum > this.preNum){this.preNum = this.lastNum}
  }
  return  this.preNum
}
addNewQuote(quote){

 this.quotes.push(quote)
}
constructor() { }
ngOnInit() {
}
}
