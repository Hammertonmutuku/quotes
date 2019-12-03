import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isCompelte = new EventEmitter<boolean>();
  @Output() isComplete = new EventEmitter<boolean>();

  quoteCompelete(complete:boolean){
    this.isCompelte.emit(complete);
  }
 quoteDelete(complete:boolean){
   this.isComplete.emit(complete);
 }
  constructor() { }

  ngOnInit() {
  }

}
