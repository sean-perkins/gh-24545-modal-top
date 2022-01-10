import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private modalCtrl: ModalController) { }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    });
    modal.present();
  }
}
