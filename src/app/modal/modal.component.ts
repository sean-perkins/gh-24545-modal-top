import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html'
})
export class ModalComponent {

  startAt = new Date().toISOString();

  constructor(private modalCtrl: ModalController) { }

  async dismiss() {
    const top = await this.modalCtrl.getTop();
    console.log('top', top);
    top.dismiss();
  }

}
