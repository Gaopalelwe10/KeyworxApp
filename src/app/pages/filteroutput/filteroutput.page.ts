import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filteroutput',
  templateUrl: './filteroutput.page.html',
  styleUrls: ['./filteroutput.page.scss'],
})
export class FilteroutputPage implements OnInit {
  propertyList
  propertyListLoaded
  constructor(private router: Router,
    private propertyService: PropertyService,
    private profileService: ProfileService
  ) {

    this.propertyService.propertyList().subscribe(data => {
      this.propertyList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })


      console.log("filteroupput" + this.propertyList);
    })

    this.propertyService.propertyList().subscribe(data => {
      this.propertyListLoaded = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
    })

  }

  ngOnInit() {
  }

  initializeItems(): void {
    this.propertyList = this.propertyListLoaded;
  }
  detail(items) {
    this.router.navigate(['/details'], {
      queryParams: {
        mainImage: items.mainImage,
        uid: items.uid,
        propertyid: items.propertyid,
      }
    });

  }

  filterList(evt) {
    this.initializeItems();

    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.propertyList = this.propertyList.filter(currentProperty => {
      if ((currentProperty.location && searchTerm)) {
        if ((currentProperty.location.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)) {
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
}
