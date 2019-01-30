import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  template: '<app-quote></app-quote>'
})
export class AppComponent {
  quotes = [new Quote(1,"","",0,0,new Date())]
}