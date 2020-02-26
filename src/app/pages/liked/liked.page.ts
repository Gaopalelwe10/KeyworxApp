import { Component, OnInit } from '@angular/core';
import { FavouriteService } from 'src/app/services/favourite.service';
import { PropertyService } from 'src/app/services/property.service';
import { ProfileService } from 'src/app/services/profile.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.page.html',
  styleUrls: ['./liked.page.scss'],
})
export class LikedPage implements OnInit {
  favouriteList
  propertyList
  infolist: any[]

  data = false;
  show = false
  count;
  constructor(
    private favouriteService: FavouriteService,
    private propertyService: PropertyService,
    private profileService: ProfileService,
    private router: Router
  ) {


    this.propertyService.propertyList().subscribe((data: any) => {
      this.propertyList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
      this.favouriteService.getfavouriteUser().subscribe((data: any) => {
        this.favouriteList = data.map(e => {
          return {
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          }
        });

        for (const reactionInfo of this.favouriteList) {

          for (const property of this.propertyList) {
            if (reactionInfo.key === property.key) {

              this.favouriteService.count(property.key).subscribe((data: any) => {
                property.userReaction = this.favouriteService.userfavourite(data);
              })

            }
          }

        }

      });

      console.log(this.propertyList)
      this.data = true;
    })
  }
  
  ngOnInit() {
  }

  hide(v) {
    this.count = v

    // if (this.count == 2) {
    //   this.show = true
    // }
  }
  react(key, val) {
    const userID = this.profileService.getUID();
    if (val != 0) {
      this.favouriteService.updatefavourite(key, userID, 0)
    } else {
      this.favouriteService.removefavourite(key, userID)
    }
  }

  detail(items) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(items),

      }
    };
    this.router.navigate(['details'], navigationExtras);
  }
}
