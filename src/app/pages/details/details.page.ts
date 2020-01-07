import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { ModalController, IonSlides } from '@ionic/angular';
import { PropertyService } from 'src/app/services/property.service';

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
  constructor(private router: Router,
    private propertyService: PropertyService,
    private profileService: ProfileService,
    private modalController: ModalController,
    private route: ActivatedRoute
  ) {
   
    this.route.queryParams.subscribe(params => {
      if (params && params.data ){
        this.propertyList= JSON.parse(params.data);
        this.propertyid=this.propertyList.propertyid
        console.log(this.propertyList)
      
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
}
