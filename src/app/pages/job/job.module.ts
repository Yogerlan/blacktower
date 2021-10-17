// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ionic imports
import { IonicModule } from '@ionic/angular';

// Local imports
import { JobPageRoutingModule } from './job-routing.module';
import { JobPage } from './job.page';

@NgModule({
  declarations: [JobPage],
  imports: [
    CommonModule,
    IonicModule,
    JobPageRoutingModule
  ]
})
export class JobPageModule { }
