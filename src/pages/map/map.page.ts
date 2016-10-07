import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.page.html'
})
export class MapPage {
  lat: number = 51.678418;
  lng: number = 7.809007;
  
  constructor(public navCtrl: NavController) {
    
  }

}
