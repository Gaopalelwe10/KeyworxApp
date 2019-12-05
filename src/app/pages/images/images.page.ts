import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {
  items={
    mainImage:"",
    location:"",
    description:"",
    price:"",
    bedrooms:"",
    bathrooms:"",
    garage: "",
  }

  constructor(private route:ActivatedRoute) { 

    this.route.queryParams
    .subscribe(params =>
 {
     
      this.items.mainImage = params.mainImage;
      this.items.location = params.location;
      this.items.price = params.price;
      this.items.description=params.description;
     this.items.bedrooms = params.bedrooms;
     this.items.bathrooms = params.bathrooms;
      this.items.garage = params.garage;
      console.log(this.items.mainImage,this.items.location,
        this.items.price,this.items.description,
        this.items.bedrooms,this.items.bathrooms,
        this.items.garage)
  });
  }

  ngOnInit() {
  }

}
