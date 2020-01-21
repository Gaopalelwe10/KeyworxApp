import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { MapboxService } from 'src/app/services/mapbox.service';
import { PropertyService } from 'src/app/services/property.service';

import { Plugins } from '@capacitor/core';

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

  constructor(
    private maboxServe: MapboxService,
) {
    this.mapboxAccessToken = this.maboxServe.token();





  }

  ngOnInit() {

  }
  ionViewDidEnter() {
    //   const loading = this.loadingCtrl.create({
    //   message: 'Signing in, Please wait...',
    // });
    // (await loading).present();
    this.initializeMapBox();
    // this.slideChanged();

    const coordinates = Geolocation.getCurrentPosition().then((response) => {
      console.log("jjj" + response.timestamp)
      this.startPosition = response.coords;
      // this.originPosition= response.Address;
      // this.map.setCenter([this.startPosition.longitude, this.startPosition.latitude]);

      // const el = document.createElement('div');
      // el.className = 'marker';
      // el.style.backgroundImage = 'url(assets/img/home.jpg)';
      // el.style.width = '40px';
      // el.style.height = '40px';

      // var marker = new mapboxgl.Marker(el)
      //   .setLngLat([this.startPosition.longitude, this.startPosition.latitude])
      //   .setPopup(new mapboxgl.Popup({ offset: 25 })
      //     .setHTML('<p>' + 'You are here' + '</p> '))
      //   .addTo(this.map);
    })
    console.log('Current', coordinates);
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
      // Coordinates of UC Berkeley
    });


    this.map.addControl(this.geocoder);

    this.geocoder.on('result', (ev) => {
      console.log(ev.result.text)
      this.value = ev.result.text;
      // this.search(ev.result.text)
      console.log("valu ll" + this.value)
      console.log("me")
      // map.getSource('single-point').setData(ev.result.geometry);

    });

    // this.geolocation.getCurrentPosition()
    //   .then((response) => {
    //     console.log("jjj" + response.timestamp)
    //     this.startPosition = response.coords;
    //     // this.originPosition= response.Address;
    //     this.map.setCenter([this.startPosition.longitude, this.startPosition.latitude]);

    //     const el = document.createElement('div');
    //     el.className = 'marker';
    //     el.style.backgroundImage = 'url(assets/img/icon.jpg)';
    //     el.style.width = '40px';
    //     el.style.height = '40px';

    //     var marker = new mapboxgl.Marker(el)
    //       .setLngLat([this.startPosition.longitude, this.startPosition.latitude])
    //       .setPopup(new mapboxgl.Popup({ offset: 25 })
    //         .setHTML('<p>' + 'You are here' + '</p> '))
    //       .addTo(this.map);
    //   })

    Geolocation.getCurrentPosition().then((response) => {
    
      this.startPosition = response.coords;
      this.map.setCenter([this.startPosition.longitude, this.startPosition.latitude]);
 
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(assets/img/icon.jpg)';
      el.style.width = '40px';
      el.style.height = '40px';

      var marker = new mapboxgl.Marker(el)
        .setLngLat([this.startPosition.longitude, this.startPosition.latitude])
        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML('<p>' + 'You are here' + '</p> '))
        .addTo(this.map);
    })


    // load coodinates from database
    this.maboxServe.propertyList().subscribe((markers: any) => {
      markers.forEach(element => {

        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(assets/img/home.png)';
        el.style.width = '40px';
        el.style.height = '40px';

        console.log(element.lng, element.lat)
        var marker = new mapboxgl.Marker(el)
          .setLngLat([element.lng, element.lat])
          .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<p>' + element.location + '</p>'))
          .addTo(this.map);
      });
    })


  }
}
