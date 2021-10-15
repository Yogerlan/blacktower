// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic imports
import { IonicModule } from '@ionic/angular';

// Local imports
import { ComponentsModule } from '../../components/components.module';
import { SearchPage } from './search.page';
import { SearchPageRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [SearchPage],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    SearchPageRoutingModule
  ]
})
export class SearchPageModule { }
