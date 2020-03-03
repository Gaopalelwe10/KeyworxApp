import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides, Platform } from '@ionic/angular';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { MapboxService } from 'src/app/services/mapbox.service';
import { PropertyService } from 'src/app/services/property.service';

import { Plugins } from '@capacitor/core';
import { ProfileService } from 'src/app/services/profile.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { NavigationExtras, Router } from '@angular/router';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('map', { static: false }) mapNativeElement: ElementRef;
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  mapboxAccessToken
  map: any;
  geocoder: any;
  spazalist;
  spazaload;

  startPosition: any;
  originPosition: string;
  destinationPosition: string;

  value: any;
  isSlide: boolean = true;
  lat;
  lng;

  isDirection;
  start;
  geojson: any = {};
  OBJ;
  plotLng: string;
  plotLat: string;
  coords: string;

  propertyList;
  favouriteList;
  propertyListLoaded;

  data = false;

  slidesOpt = {
    slidesPerView: 1.2,
    centeredSlides: true,
    speed: 500
  }
  markers = [];

  constructor(
    private maboxServe: MapboxService,
    private propertyService: PropertyService,
    private profileService: ProfileService,
    private favouriteService: FavouriteService,
    private router: Router,
    private platform: Platform
  ) {

    if (this.platform.is("ipad")) {
      this.slidesOpt = {
        slidesPerView: 2.1,
        centeredSlides: true,
        speed: 500
      }

    }
    this.mapboxAccessToken = this.maboxServe.token();




  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.initializeMapBox();
  }

  initializeItems(): void {
    this.propertyList = this.propertyListLoaded;
  }

  
  initializeMapBox() {
    // or "const mapboxgl = require('mapbox-gl');"

    this.map = new mapboxgl.Map({
      container: this.mapNativeElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 10,
      // center: [lng, lat],
      center: [28.218370, -25.731340]
    });

    this.geocoder = new MapboxGeocoder({ // Initialize the geocoder
      accessToken: this.mapboxAccessToken, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: {
        color: 'orange'
      },
      placeholder: 'Search for places ', // Placeholder text for the search bar

    });


    this.map.addControl(this.geocoder);

    this.geocoder.on('result', (ev) => {
      console.log(ev.result.text)
      this.value = ev.result.text;
      this.search(ev.result.text)
      console.log("valu ll" + this.value)
      console.log("me")
      // map.getSource('single-point').setData(ev.result.geometry);

    });


    Geolocation.getCurrentPosition().then((response) => {

      this.startPosition = response.coords;
      this.map.setCenter([this.startPosition.longitude, this.startPosition.latitude]);

      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(assets/img/pin.png)';
      el.style.width = '24px';
      el.style.height = '24px';

      var marker = new mapboxgl.Marker(el)
        .setLngLat([this.startPosition.longitude, this.startPosition.latitude])
        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML('<p>' + 'You are here' + '</p> '))
        .addTo(this.map);
    })


    // load coodinates from database

    this.propertyService.propertyList().subscribe((data: any) => {

      this.propertyList = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })

      this.maker()
      this.propertyListLoaded = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })

      this.favouriteService.getfavouriteUser().subscribe((data: any) => {
        this.favouriteList = data.map(e => {
          return {
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          }
        });

        for (const reactionInfo of this.favouriteList) {

          for (const property of this.propertyList) {
            if (reactionInfo.key === property.key) {

              this.favouriteService.count(property.key).subscribe((data: any) => {
                // property.reactionCount = this.favouriteService.countfavourite(data)[0];
                property.userReaction = this.favouriteService.userfavourite(data);
              })

            }
          }

          for (const property of this.propertyListLoaded) {
            if (reactionInfo.key === property.key) {

              this.favouriteService.count(property.key).subscribe((data: any) => {
                // property.reactionCount = this.favouriteService.countfavourite(data)[0];
                property.userReaction = this.favouriteService.userfavourite(data);
              })

            }
          }
        }

      });

      console.log(this.propertyList)

      this.data = true;
    })

    // this.maboxServe.propertyList().subscribe((markers: any) => {
    //   markers.forEach((element, index) => {

    //     const el = document.createElement('div');
    //     el.className = 'marker';
    //     el.style.backgroundImage = 'url(assets/img/placeholder.png)';
    //     el.style.width = '24px';
    //     el.style.height = '24px';
    //     el.addEventListener('click', () => {
    //       this.slideTo(7)
    //     });
    //     console.log(element.lng, element.lat)
    //     var marker = new mapboxgl.Marker(el)
    //       .setLngLat([element.lng, element.lat])
    //       .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    //         .setHTML('<p> ' + element.location + +'</p>'))
    //       .addTo(this.map);
    //   });
    // })


  }


  slideTo(i) {
    this.slides.slideTo(i);
  }
  
  maker() {

    this.propertyList.forEach((element, index) => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(assets/img/placeholder.png)';
      el.style.width = '24px';
      el.style.height = '24px';
      el.addEventListener('click', () => {
        this.slideTo(index)
      });
      console.log(element.lng, element.lat)
      var marker = new mapboxgl.Marker(el)
        .setLngLat([element.lng, element.lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML('<p>' + element.location +'</p>'))
        .addTo(this.map);
      this.markers.push(marker)
    });

  }
  removeMaker() {
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];
  }
  detail(items) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(items),

      }
    };
    this.router.navigate(['details'], navigationExtras);
  }

  react(key, val) {
    const userID = this.profileService.getUID();
    if (val != 0) {
      this.favouriteService.updatefavourite(key, userID, 0)
    } else {
      this.favouriteService.removefavourite(key, userID)
    }
  }
  found = 0
  show = "true"
  search(evt) {
    this.initializeItems();
    this.removeMaker()
    const searchTerm = evt

    if (!searchTerm) {
      return;
    }

    this.propertyList = this.propertyList.filter(currentProperty => {
      if (currentProperty.location && searchTerm) {
        if (currentProperty.location.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          this.found += 1

          return true;
        }

        return false;
      }
    });

    if (this.found >= 1) {
      this.show = "true";
      this.maker()
      console.log("found" + this.found)
    }
    if (this.found == 0) {
      console.log("Not found")
      this.show = "false";
    }
    console.log("show " + this.show)
    this.found = 0;
  }
}
