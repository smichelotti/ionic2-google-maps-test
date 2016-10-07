import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map.page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {
    
  }

  goToMap(){
    this.nav.push(MapPage);
  }
}
