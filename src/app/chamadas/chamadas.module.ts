import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChamadasPageRoutingModule } from './chamadas-routing.module';

import { ChamadasPage } from './chamadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChamadasPageRoutingModule
  ],
  declarations: [ChamadasPage]
})
export class ChamadasPageModule {}
