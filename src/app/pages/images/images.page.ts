import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { IonSlides } from '@ionic/angular';
// import { FullScreenImage, FullScreenImageOriginal } from '@ionic-native/full-screen-image';
import {ModalController} from '@ionic/angular';
import { IonToggle } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {
  @ViewChild('slides', {static:true}) slides: IonSlides;
  items = {
    mainImage: "",
    location: "",
    description: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    garage: "",
  }
  prefersDark = false;

  // imgUrl = `./../../assets/img/silhoutte.jpg`; // Use for local development
  imgUrl = `https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?&q=80`;

  slidesOptions1 = {
    initialSlide: 1,
    speed: 400,
  }
  
  slideIndex = 1;
  propertyid
  imageList
  images: any;
  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
  centeredslides: true,
    spaceBetween:20
  }
index=0;

slideOptions={ zoom: { maxRatio: 7}}
  
  

pic={
  downloadURL:"",
}
  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private router:Router,
    private modalController:ModalController,
  ) {
  

      this.route.queryParams.subscribe(params => {
        if (params && params.imageList) {
          this.index=JSON.parse(params.index)
          this.imageList = JSON.parse(params.imageList);
          
          console.log(this.imageList)
          console.log(this.index)
        }
        
      });
    
  }
  OpenPreview(pic){
this.modalController.create({
  component:ImageModalPage,
  componentProps:{
pic :pic
  }
}).then(modal =>modal.present())
  }

  ngOnInit() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // this.toggleTheme();
    }
    // this.propertyService.imageList(this.propertyid).subscribe((data)=>{
    //   this.imageList = data.map(e => {
    //     return {
    //       key: e.payload.doc.id,
    //       ...e.payload.doc.data()
    //     }
    //   })
    //   console.log(this.imageList);
    // })
    // this.slides.slideTo(this.index)
  }

  // toggleTheme() {
  //   this.prefersDark = !this.prefersDark;
  //   document.body.classList.toggle('dark', this.prefersDark);
  // }

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
