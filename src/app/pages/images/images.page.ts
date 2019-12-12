import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { ModalController } from '@ionic/angular';
// import { FullScreenImage, FullScreenImageOriginal } from '@ionic-native/full-screen-image';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {
  items = {
    mainImage: "",
    location: "",
    description: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    garage: "",
  }

  imge={

  }
  propertyid
  imageList
  images: any;
  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private router:Router,
    private modalCtrl: ModalController
  ) {
    this.route.queryParams
      .subscribe(params => {
        this.propertyid = params.propertyid;
        console.log(this.propertyid)
      });
  }

  ngOnInit() {
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

// full(){
//   this.fullScreenImage.showImageURL('imageList.key.downloadURL')
//   // .then((data: any) => console.log(res))
//   // .catch((error: any) => console.error(error));

// }

full(pic){
  this.router.navigate(['/fullscreen'], {
    queryParams: {
      downloadURL: pic.downloadURL,
}
});
  }

//   openGallery(){
// let modal = this.modalCtrl.create(GalleryModel,{
//   phothos:this.images,
//   initialSlide:0,
//   closeIcon:'back'
// });
// modal.present();
//   }
}
