// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic imports
import { IonicModule } from '@ionic/angular';

// Local imports
import { ComponentsModule } from '../../components/components.module';
import { SearchPage } from './search.page';
import { SearchPageRoutingModule } from './search-routing.module';
import { PersonPageModule } from '../person/person.module';

@NgModule({
  declarations: [SearchPage],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    SearchPageRoutingModule,
    PersonPageModule
  ]
})
export class SearchPageModule { }
