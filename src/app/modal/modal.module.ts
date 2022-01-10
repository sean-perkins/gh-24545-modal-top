import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal.component';

@NgModule({
  imports: [IonicModule, FormsModule, CommonModule],
  declarations: [ModalComponent],
  exports: [ModalComponent]
})
export class ModalModule { }
