import { Injectable } from '@angular/core';
import { AppSubscriber } from './classes/appSubscriber';

import * as _ from 'underscore';

@Injectable()
export class ModalService {

  private isModalShown: boolean = false;
  private modalType: string = 'unavailable';

  subscribers: AppSubscriber[] = [];

  constructor() { }

  registerSubscriber(subscriber: AppSubscriber) {
    this.subscribers.push(subscriber);
  }
  notifySubscribers() {
    _.each(this.subscribers, (subscriber: AppSubscriber) => {
      subscriber.notify();
    });
  }

  getModalStatus(): boolean {
    return this.isModalShown;
  }

  getModalType(): string {
    return this.modalType;
  }

  showModal(type?: string) {
    this.isModalShown = true;
    if (type == null) {
      this.modalType = 'unavailable';
    } else {
      this.modalType = type;
      console.log('type is not null')
      console.log(this.modalType)
    }

    this.notifySubscribers();
  }

  hideModal() {
    this.isModalShown = false;
    this.notifySubscribers();
  }

}
