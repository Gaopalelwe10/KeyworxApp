import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
  @ViewChild('slider', { read: ElementRef, static: true }) slider: ElementRef;
  pic = {
    downloadURL: "",
  }
  slideIndex = 1;


  slidesOptions1 = {
    initialSlide: 1,
    speed: 400,
  }

  sliderOpts = {
    zoom: {
      maxRatio: 3
    }
  };
  index: any;
  imageList: any;
  constructor(private navParams: NavParams, private route: ActivatedRoute, private modalController: ModalController,
  ) {
    
    this.route.queryParams.subscribe(params => {
      if (params && params.imageList) {
        this.index = JSON.parse(params.index)
        this.imageList = JSON.parse(params.imageList);

        console.log(this.imageList)
        // console.log(this.index)
      }

    });

  }

  ngOnInit() {
  }

  zoom(zoomin: boolean) {
    console.log("am zooming")
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomin) {
      zoom.in();
    } else {
      zoom.out();
    }
  }

  close() {
    this.modalController.dismiss();
  }
}
