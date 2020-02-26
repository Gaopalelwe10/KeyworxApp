import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router, NavigationExtras } from '@angular/router';
import { FavouriteService } from 'src/app/services/favourite.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-filteroutput',
  templateUrl: './filteroutput.page.html',
  styleUrls: ['./filteroutput.page.scss'],
})
export class FilteroutputPage implements OnInit {
  propertyList
  propertyListLoaded
  favouriteList
  SeachLocation = ''
  data = false;
  count;
  show = false

  constructor(private router: Router,
    private propertyService: PropertyService,
    private profileService: ProfileService,
    private favouriteService: FavouriteService,
    private navC: NavController
    
  ) {
    
    
  }

  ngOnInit() {

  }
  ionViewWillEnter(){
    this.hide(0)
    this.propertyService.filterproperty().subscribe((data: any) => {

      this.propertyList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })

      this.propertyListLoaded = data.map(e => {
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

            for (const property of this.propertyListLoaded) {
              if (reactionInfo.key === property.key) {

                this.favouriteService.count(property.key).subscribe((data: any) => {
                  // property.reactionCount = this.favouriteService.countfavourite(data)[0];
                  property.userReaction = this.favouriteService.userfavourite(data);
                })

              }
            }
          }

        }

      });

      console.log(this.propertyList)
      this.data = true;
    })
    
    this.SeachLocation = this.propertyService.searchL
    this.show = false
    if(this.SeachLocation == null || this.SeachLocation == ''){
      this.hide(2) 
      this.propertyAfterFilter()
    }else{ 
      this.propertyAfterFilter()
    }
  }
  hide(v) {
    this.count = v
  }
  
  propertyAfterFilter(){
    setTimeout(()=>{
      if (this.count != 2) {
        this.show = true
      }
    },1000);   
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
    this.router.navigate(['details'], navigationExtras);
  }

  filterList(evt) {
    this.initializeItems();

    const searchTerm = evt

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
  home() {
    this.router.navigateByUrl("tabs/home")
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
