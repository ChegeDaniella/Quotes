import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
   new Quote(1,"I beleive in team worker","Martin","John")
    
  ]
  toggleDetails(index){
    this.quotes[index].showDetails=!this.quotes[index].showDetails;
  }
  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm('Are you sure you want to delete this Quote and the details')

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
