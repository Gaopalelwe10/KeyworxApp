import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  slideIndex = 1;
  propertyid
  imageList
  images: any;
  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private router:Router,
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

  // openModal() {
  //   document.getElementById('id01').style.display="block"  
  // }
  // closeModal() {
  //   document.getElementById("id01").style.display = "none";
  // }

  // plusSlides(n) {
  //   this.showSlides(this.slideIndex += n);
  // }
  // currentSlide(n) {
  //   this.showSlides(this.slideIndex = n);
  // }
  
  // showSlides(slideIndex);
  
  // showSlides(n) {
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
  //   var dots = document.getElementsByClassName("demo");
  //   var captionText = document.getElementById("caption");
  //   if (n > slides.length) {this.slideIndex = 1}
  //   if (n < 1) {this.slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[this.slideIndex-1].style.display = "block";
  //   dots[this.slideIndex-1].className += " active";
  //   captionText.innerHTML = dots[this.slideIndex-1].alt;
  // }


//   openGallery(){
// let modal = this.modalCtrl.create(GalleryModel,{
//   phothos:this.images,
//   initialSlide:0,
//   closeIcon:'back'
// });
// modal.present();
//   }
}
