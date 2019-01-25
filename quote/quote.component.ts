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
  completeGoal(isComplete,index){
    if (isComplete){
        this.quotes.splice(index,1);
        }
        }

  constructor() { }

  ngOnInit() {
  }

}
