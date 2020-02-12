import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-popover-more',
  templateUrl: './popover-more.page.html',
  styleUrls: ['./popover-more.page.scss'],
})
export class PopoverMorePage implements OnInit {

  constructor(
    private profileService: ProfileService,
    private popoverController:PopoverController,
    private router:Router, 
    public composer:EmailComposer
  ) { }

  ngOnInit() {
  }

  logout(){
    this.profileService.logout().then(()=>{
      
    });
    this.DismissClick();
  }
  async DismissClick() {
    await this.popoverController.dismiss();
  }

  repayments(){
    this.router.navigateByUrl("fullscreen")
    this.DismissClick();
  }

  contact(){
    this.router.navigateByUrl("contact")
    this.DismissClick();
  }

  OpenEmailComposer(){

    let email = {
      to: 'khodani1994@gmail.com',
      subject: 'How can we help you',
    }
    
    this.composer.open(email);

    this.DismissClick();
  }
}
