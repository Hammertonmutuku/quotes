import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

     quotes:Quote [] = [
      new  Quote (1,"Hammerton", "The best is yet to come",0,0),
      new Quote (2,"Simon kimani", "Get ready for change",0,0),
      new Quote (3,"Kelvin Mbugua","Change is inevitable",0,0),
    ];

    toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    completeQuote(isComplete, index){
      if (isComplete) {
        this.quotes.splice(index,1);
      }
    }
    numberOflikes:number=0;
    numberOfDislikes:number=0;
    upvote(index){
      this.quotes[index].upvote+=1;
    }
    downvote(index){
      this.quotes[index].downvote+=1;
    }
    deleteQuote(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }

  constructor() { }

  ngOnInit() {
  }

}
