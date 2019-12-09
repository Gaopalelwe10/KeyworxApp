import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { PropertyService } from '../services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  propertyList;

  slidesOptions = {
    slidesPerView: 2.5,
  }

  slidesOpt = {
    slidesPerView: 1.5,
  }
  constructor(private router: Router,
    private propertyService: PropertyService,
    private profileService: ProfileService) {
      this.propertyService.propertyList().subscribe(data => {
        this.propertyList = data.map(e => {
          return {
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          }
        })
        console.log("kk" + this.propertyList);
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
    this.router.navigate(['/details'], {
      queryParams: {
        mainImage: items.mainImage,
        uid: items.uid, propertyid: items.propertyid,
        location: items.location, price: items.price, description: items.description
      }
    });

  }

}
