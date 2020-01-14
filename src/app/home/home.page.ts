import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { PropertyService } from '../services/property.service';
import { Router, NavigationExtras } from '@angular/router';
import { Platform } from '@ionic/angular';
import { FavouriteService } from '../services/favourite.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 
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

  data = false;
  propertySaleList
  textSearch;
  constructor(private router: Router,
    private propertyService: PropertyService,
    private profileService: ProfileService,
    public platform: Platform,
    private favouriteService: FavouriteService,
    private categoryService: CategoryService,
  ) {

    if (this.platform.is("ipad")) {
      this.slidesOptions = {
        slidesPerView: 4.2,

      }
      this.slidesOpt = {
        slidesPerView: 2.2,
        centerSlides: true,
        // spaceBetween: 10,
      }
    }

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
                property.userReaction = this.favouriteService.userfavourite(data);
              })

            }
          }

        }


      });

      console.log(this.propertyList)
      this.data = true;
    });
    
  }
  ngOnInit(){
    this.textSearch="sale"
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
    this.router.navigate(['details'], navigationExtras);
  }

  viewFeatuered() {
    this.router.navigateByUrl('featured')
  }

  view() {
    this.router.navigateByUrl('category')
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
