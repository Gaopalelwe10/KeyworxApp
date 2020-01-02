import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { PropertyService } from '../services/property.service';
import { Router, NavigationExtras } from '@angular/router';
import { Platform } from '@ionic/angular';
import { FavouriteService } from '../services/favourite.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  propertyList;

  slidesOptions = {
    slidesPerView: 2.3,
  }

  slidesOpt = {
    slidesPerView: 1.2,
    centerSlides: true,
    // spaceBetween: 10,
  }
  userReaction = null
  favouriteList
  constructor(private router: Router,
    private propertyService: PropertyService,
    private profileService: ProfileService,
    public platform: Platform,
    private favouriteService: FavouriteService
  ) {

    // if (this.platform.is("ipad")) {
    //   this.slidesOptions = {
    //     slidesPerView: 4.2,
    //   }
    // } else {
    //   this.slidesOptions = {
    //     slidesPerView: 2.2,
    //   }
    // }
    
    this.propertyService.propertyList().subscribe((data: any) => {
      this.propertyList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })

      this.favouriteService.getfavourite().subscribe((data: any) => {
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
                // property.reactionCount = this.favouriteService.countfavourite(data)[0];
                property.userReaction = this.favouriteService.userfavourite(data);
              })
            }
          }
       
        }
      });
      console.log(this.propertyList)
    })
  }
  ionViewDidEnter() {

  }

  fliter() {
    this.router.navigateByUrl("filter")
  }
  logout() {
    this.profileService.logout();
  }

  detail(items) {
    // this.router.navigate(['/details'], {
    //   queryParams: {
    //     mainImage: items.mainImage,
    //     uid: items.uid, propertyid: items.propertyid,
    //     location: items.location, price: items.price, description: items.description
    //   }
    // });

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(items),
        
      }
    };
    this.router.navigate(['details'], navigationExtras );
  }

  react(key, val) {
    const userID = this.profileService.getUID();
    if (val != 0) {
      this.favouriteService.updatefavourite(key, userID, 0)
    } else {
      this.favouriteService.removefavourite(key, userID)
    }
  }
}
