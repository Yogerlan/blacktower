// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic imports
import { IonicModule } from '@ionic/angular';

// Local imports
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent]
})
export class ComponentsModule { }
