import { Component } from '@angular/core';
import { PopoverComponent } from '../popover/popover.component';
import {ModalController} from '@ionic/angular'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

constructor(public modalCtrl:ModalController){

}
async notifications(ev: any) {
    const popover = await this.modalCtrl.create({
        component: PopoverComponent,
        componentProps:{}
    });

    return await popover.present();
}
}
