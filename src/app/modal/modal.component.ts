import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { AppSubscriber } from '../classes/appSubscriber';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  private isModalShown: boolean = true;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  hideModal() {
    this.modalService.hideModal();
  }

}
