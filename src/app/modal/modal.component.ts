import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { AppSubscriber } from '../classes/appSubscriber';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AppSubscriber {
  private isModalShown: boolean = true;

  private isUnavailable: boolean = true;
  private isFilter: boolean = false;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.modalService.registerSubscriber(this);
  }

  notify() {
    let modalType = this.modalService.getModalType();
    console.log(modalType)
    if (modalType == 'filter') {
      this.isFilter = true;
      this.isUnavailable = false;
    } else {
      this.isUnavailable = true;
      this.isFilter = false;
    }
  }

  hideModal() {
    this.modalService.hideModal();
  }

}
