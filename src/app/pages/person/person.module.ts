// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic imports
import { IonicModule } from '@ionic/angular';

// Local imports
import { PersonPageRoutingModule } from './person-routing.module';
import { PersonPage } from './person.page';

@NgModule({
  declarations: [PersonPage],
  imports: [
    CommonModule,
    IonicModule,
    PersonPageRoutingModule
  ]
})
export class PersonPageModule { }
