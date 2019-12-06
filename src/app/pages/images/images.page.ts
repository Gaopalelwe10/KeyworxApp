import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
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
  propertyid
  imageList
  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    // private fullScreenImage: FullScreenImageOriginal
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
}
