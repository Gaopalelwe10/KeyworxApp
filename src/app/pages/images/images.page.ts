import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';

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
    private propertyService: PropertyService
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


}
