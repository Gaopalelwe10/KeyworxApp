import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { ProfileService } from 'src/app/services/profile.service';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.page.html',
  styleUrls: ['./featured.page.scss'],
})
export class FeaturedPage implements OnInit {
  propertyList
  propertyListLoaded
  favouriteList
  constructor(
    private router: Router,
    private propertyService: PropertyService,
    private profileService: ProfileService,
    private favouriteService: FavouriteService
  ) { 
    this.propertyService.propertyList().subscribe((data: any) => {
    
      this.propertyList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })

      this.propertyListLoaded=data.map(e => {
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
                // property.reactionCount = this.favouriteService.countfavourite(data)[0];
                property.userReaction = this.favouriteService.userfavourite(data);
              })

            }
          }

          for (const property of this.propertyListLoaded) {
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

  ngOnInit() {
  }

  initializeItems(): void {
    this.propertyList = this.propertyListLoaded;
  }
  detail(items) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(items),
        
      }
    };
    this.router.navigate(['details'], navigationExtras );
  }

  filterList(evt) {
    this.initializeItems();

    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.propertyList = this.propertyList.filter(currentProperty => {
      if (currentProperty.location && searchTerm) {
        if (currentProperty.location.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

  }
  fliter() {
    this.router.navigateByUrl("filter")
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
