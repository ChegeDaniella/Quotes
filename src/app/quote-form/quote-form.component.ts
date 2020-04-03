import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
// import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Input() quote:Quote;
  newQuote =new Quote(0,"","","",new Date())
  @Output() sub = new EventEmitter<any>();

  submitQuote(){
    this.sub.emit(this.newQuote);
    this.newQuote =new Quote(0,"","","",new Date())
    // this.quoteForm.reset();

  }

  constructor() { }

  ngOnInit(): void {
  }

}
