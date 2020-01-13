import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-popover-more',
  templateUrl: './popover-more.page.html',
  styleUrls: ['./popover-more.page.scss'],
})
export class PopoverMorePage implements OnInit {

  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
  }

  logout(){
    this.profileService.logout();
  }
}
