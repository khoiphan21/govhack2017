import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import { AppSubscriber } from './classes/appSubscriber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AppSubscriber {
  private isModalShown: boolean = false;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.modalService.registerSubscriber(this);
  }

  notify() {
    this.isModalShown = this.modalService.getModalStatus();
    console.log(this.isModalShown);
  }

  hideModal() {
    this.modalService.hideModal();
  }
}
