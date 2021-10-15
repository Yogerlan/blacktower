// Angular imports
import { Component } from '@angular/core';

// Ionic imports
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {

  constructor(private menuController: MenuController) { }

  toggleMenu() {
    this.menuController.toggle();
  }

}
