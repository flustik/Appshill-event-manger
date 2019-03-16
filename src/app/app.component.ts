import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';
import{firebaseConfig}from'./credentials';
import { Plugins } from '@capacitor/core';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor() {
    this.initializeApp();
    firebase.initializeApp(firebaseConfig);
  }


  initializeApp() {
    SplashScreen.hide() .catch(error => {
      console.error(error);
    });
    

    StatusBar.hide().catch(error => {
       console.error(error);  
    });
  }
}
