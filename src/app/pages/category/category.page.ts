import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { NavigationExtras, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  propertyList
  favouriteList
  propertyListLoaded
  constructor(
    private categoryService: CategoryService,
    private profileService: ProfileService,
    private favouriteService: FavouriteService,
    private router: Router,
  ) {
    categoryService.category('sale').subscribe((data: any) => {
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

    })
   }

  ngOnInit() {
  }

  initializeItems(): void {
    this.propertyList = this.propertyListLoaded;
  }

  fliter() {
    this.router.navigateByUrl("filter")
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
}
