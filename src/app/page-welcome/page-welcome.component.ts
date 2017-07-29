import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-welcome',
  templateUrl: './page-welcome.component.html',
  styleUrls: ['./page-welcome.component.scss']
})
export class PageWelcomeComponent implements OnInit {
  isSuggestionShown: boolean = false;
  inputText: string = '';
  address: string = '1/1207 Sandgate Rd, Nundah QLD 4102';
  isError: boolean = false;
  
  constructor(
    private router: Router
  ) { }

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
    this.isError = false;
  }

  toStatsPage() {
    if (this.inputText == this.address) {
      this.router.navigate(['welcome/stats'])
    } else {
      this.isError = true;
      this.hideSuggestion();
    }
  }

}
