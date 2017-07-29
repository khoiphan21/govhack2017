import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-welcome',
  templateUrl: './page-welcome.component.html',
  styleUrls: ['./page-welcome.component.scss']
})
export class PageWelcomeComponent implements OnInit {
  isSuggestionShown: boolean = false;
  inputText: string = '';
  address: string = '1/1207 Sandgate Rd, Nundah QLD 4102';

  constructor() { }

  ngOnInit() {
  }

  showSuggestion(event: Event) {
    this.isSuggestionShown = true;
    event.preventDefault();
    event.stopPropagation();
  }
  hideSuggestion() {
    this.isSuggestionShown = false;
  }
  selectAddress() {
    this.inputText = this.address;
  }

}
