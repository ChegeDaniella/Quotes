import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Input() quote:Quote;
  newQuote =new Quote(0,"","","")
  @Output() sub = new EventEmitter<any>();

  submitQuote(){
    this.sub.emit(this.newQuote);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
