import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private profileService: ProfileService, 
    private alertCtrl: AlertController,
       public actionSheetController: ActionSheetController  
    ) { }

  ngOnInit() {
  }
  async presentActionSheet() {
    const alert  = await this.alertCtrl.create({
      header: '.....',
      buttons: [
     
      {
        text: 'T&C APPLY',
        role: 'cancel',
        handler: () => {
          console.log('T&C clicked');
          // this.takePhoto()  
        }
      }, {
        text: 'Contact Us',
        role: 'cancel',
        handler: () => {
          console.log('Contact clicked');
        
        //  this.upload(event);
        }
       } , {
        text: 'Settings',
        role: 'cancel',
        handler: () => {
          console.log('Settings clicked');
        
        //  this.upload(event);
        }
       } , {
          text: 'LogOut',
          role: 'cancel',
          handler: () => {
            console.log('LogOut clicked');
            this.profileService.logout()
          }
        
      }]
    });
    alert.present();
    
  }
}
