import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-accordion',
  templateUrl: './search-accordion.component.html',
  styleUrls: ['./search-accordion.component.scss']
})
export class SearchAccordionComponent implements OnInit {
  @Input()
  private options: Object;
  private inputValue: String;

  constructor() { }

  ngOnInit() {
    this.inputValue = '';
  }

}
