import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
