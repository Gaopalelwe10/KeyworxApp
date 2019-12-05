import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { ModalController } from '@ionic/angular';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  propertyList: any;
  items={
    mainImage:"",
    location:"",
    description:"",
    price:"",
    bedrooms:"",
    bathrooms:"",
    garage: "",
  }
    constructor(private router:Router,
         private propertyService: PropertyService,
      private profileService: ProfileService,  
        private modalController: ModalController,
        private route:ActivatedRoute
      ) 
      { 
        this.propertyService.propertyList().subscribe(data => {
          this.propertyList = data.map(e => {
            return {
              key: e.payload.doc.id,
              ...e.payload.doc.data()
            }
          })
          console.log(this.propertyList);
        })
  
        this.route.queryParams
        .subscribe(params =>
     {
         
          this.items.mainImage = params.mainImage;
          this.items.location = params.location;
          this.items.price = params.price
          this.items.description=params.description
          console.log(this.items.mainImage,this.items.location,
            this.items.price,this.items.description)
      });
       }
       
  
    ngOnInit() {
    }
  
    image(items) {
      this.router.navigate(['/images'], {
        queryParams: {
          mainImage: items.mainImage,
          uid: items.uid, propertyid: items.propertyid,
          location: items.location, price: items.price,
           description: items.description,
           bedrooms: items.bedrooms,
           bathrooms: items.bathrooms,
           garage: items.garage
        }
      });
    } 

}
