import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformePageRoutingModule } from './informe-routing.module';

import { InformePage } from './informe.page';
import { ModalComponent } from 'src/app/componentes/modalInfo/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformePageRoutingModule
  ],
  declarations: [InformePage, ModalComponent]
})
export class InformePageModule {}
