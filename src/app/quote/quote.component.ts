import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes =[]
  preNum:number
  lastNum:number
  counter:number

  toggleDetails(index){
    this.quotes[index].showName=!this.quotes[index].showName;
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
