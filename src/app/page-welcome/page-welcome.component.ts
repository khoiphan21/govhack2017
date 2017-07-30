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
  
  isIndustrySectionShown: boolean = false;
  isIndustrySuggestionShown: boolean = false;
  industryText: string = '';
  industry: string = 'Retail > Hospitality > Dessert Stores'
  isParamShown: boolean = false;
  isIndustryError: boolean = false;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  showIndustrySection() {
    if (this.inputText == this.address) {
      this.isIndustrySectionShown = true;
    } else {
      this.isError = true;
      this.hideSuggestion();
    }
  }

  showIndustrySuggestion(event: Event) {
    this.isIndustrySuggestionShown = true;
    event.preventDefault();
    event.stopPropagation();
  }
  hideIndustrySuggestion() {
    this.isIndustrySuggestionShown = false;
  }
  selectIndustry() {
    this.industryText = this.industry;
    this.isParamShown = true;
    this.isError = false;
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

  hideAllSuggestion() {
    this.hideSuggestion();
    this.hideIndustrySuggestion();
  }

  toStatsPage() {
    if (this.inputText == this.address && this.industryText == this.industry) {
      // Reset all values
      this.resetValues();

      this.router.navigate(['welcome/stats-nundah'])
    } else if (this.inputText == this.address) {
      this.isError = true;
      this.hideAllSuggestion();
    } else if (this.industryText == this.industry) {
      this.isIndustryError = true;
      this.hideAllSuggestion();
    }
  }

  resetValues() {
    this.isSuggestionShown = false;
    this.inputText = '';
    this.isError = false;

    this.isIndustrySectionShown = false;
    this.isIndustrySuggestionShown = false;
    this.industryText = '';
    this.isParamShown = false;
    this.isIndustryError = false;
  }

}
