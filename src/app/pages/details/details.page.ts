import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { ModalController, IonSlides } from '@ionic/angular';
import { PropertyService } from 'src/app/services/property.service';
import { FavouriteService } from 'src/app/services/favourite.service';

import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  @ViewChild('slides', {static:true}) slides: IonSlides;
  propertyid
  propertyList: any;

  items = {
    mainImage: "",
    location: "",
    description: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    garage: "",
    propertyid:"",

  }
  imageList 

  slidesOptions = {
    initialSlide: 1,
    speed: 400,
  }
  slidesOptions2 = {
    slidesPerView: 2.6,
    speed: 400,
  }
  array
  favouriteList
  constructor(private router: Router,
    private propertyService: PropertyService,
    private profileService: ProfileService,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private favouriteService: FavouriteService
  ) {
   
    this.route.queryParams.subscribe(params => {
      if (params && params.data ){
        this.propertyList= JSON.parse(params.data);
        this.propertyid=this.propertyList.propertyid
        console.log(this.propertyList)
      
      }
      
    });
    this.favouriteService.getfavourite().subscribe((data: any) => {
      this.favouriteList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      });

      for (const reactionInfo of this.favouriteList) {
          if (reactionInfo.key ===  this.propertyid) {
            this.favouriteService.count( this.propertyid).subscribe((data: any) => {
              this.propertyList.userReaction = this.favouriteService.userfavourite(data);
            })
          }
      }
    });
    // this.route.queryParams
    //   .subscribe(params => {
    //     this.propertyid=params.propertyid;
    //     this.items.propertyid= params.propertyid;
    //     this.items.mainImage = params.mainImage;
    //     this.items.location = params.location;
    //     this.items.price = params.price;
    //     this.items.bedrooms = params.bedrooms;
    //     this.items.description = params.description;
    //     this.items.bathrooms = params.bathrooms;
    //     this.items.garage = params.garage;
    //     console.log(this.items.mainImage, this.items.location,
    //       this.items.price, this.items.description)
    //   });
  }


  ngOnInit() {
    // this.propertyService.getpropertyDetails(this.propertyid).subscribe((data:any) => {
    //   this.propertyList=data
    //   console.log("working")
    //   console.log(this.propertyList);
    // })
    this.propertyService.imageList(this.propertyid).subscribe((data)=>{
      this.imageList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
      
      console.log(this.imageList);
    })
  }

  async share(){
    // let shareRet = await Share.share({
    //   title: 'See cool stuff',
    //   text: 'Really awesome thing you need to see right meow',
    //   url: 'http://ionicframework.com/',
    //   dialogTitle: 'Share with buddies'
    // });

    console.log(this.propertyList.bedrooms + "  Bedroom " + this.propertyList.typeofproperty +" for Sale in " + this.propertyList.location +" on Keyworkx")
    console.log("I found this " + this.propertyList.bedrooms + "  Bedroom " + this.propertyList.typeofproperty + " on the Keyworx App. Check it out:" )
  }

  image(items) {
    this.router.navigate(['/images'], {
      queryParams: {
        propertyid: items.propertyid,
       
      }
    });
  }

  view(i){
    // this.router.navigate(['/images'], {
    //   queryParams: {
    //     array: JSON.stringify(this.imageList),
       
    //   }
    // });
    console.log("index")
    console.log(i)
    const navigationExtras: NavigationExtras = {
      queryParams: {
        imageList: JSON.stringify(this.imageList),
        index: i,
      }
    };


    this.router.navigate(['images'], navigationExtras );
  }

  message(){
    this.router.navigateByUrl("message")
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
