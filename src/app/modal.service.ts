import { Injectable } from '@angular/core';
import { AppSubscriber } from './classes/appSubscriber';

import * as _ from 'underscore';

@Injectable()
export class ModalService {

  private isModalShown: boolean = false;

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

  showModal() {
    this.isModalShown = true;
    this.notifySubscribers();
  }

  hideModal() {
    this.isModalShown = false;
    this.notifySubscribers();
  }

}
