import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverMorePage } from '../popover-more/popover-more.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
    private popoverController: PopoverController,
  ) { }

  ngOnInit() {
  }

  async more(ev: any ){
   
      const popover= await this.popoverController.create({
        component: PopoverMorePage,
        event: ev,
        // componentProps:{
        //   comment:  comment,
        //   spazauid: this.spazauid,
        // },
        // translucent: true
      });
      return await popover.present();
    
  }
}
