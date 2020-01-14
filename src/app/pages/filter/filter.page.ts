import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  min: number = 0;
  max: 1000000000000000000;
  bedrooms;
  bathrooms;
  garages;

  list = [0, 1, 2, 3, 4, 5];

  constructor(
    private router: Router,
    public propertyService: PropertyService
  ) {
    this.getItemBed();
    this.getItemBath();
    this.getItemG();
  }

  ngOnInit() {
    // this.clickedButton(event, 1)
  }

  async getItemBed() {
    const { value }: any = await Storage.get({ key: 'Bed' });
    if (value != 'null') {
      this.bedrooms = Number(value)
      console.log('a ' + this.bedrooms)
    } else {
      this.bedrooms = 0
    }
  }

  async getItemBath() {
    const { value }: any = await Storage.get({ key: 'Bath' });
    if (value != 'null') {
      this.bathrooms = Number(value)
      console.log('a ' + this.bathrooms)
    } else {
      this.bathrooms = 0
    }
  }

  async getItemG() {
    const { value }: any = await Storage.get({ key: 'Garage' });
    if (value != 'null') {
      this.garages = Number(value)
      console.log('a ' + this.garages)
    } else {
      this.garages = 0
    }
  }
  cancel() {
    this.router.navigateByUrl("tabs/home")
  }

  async BedButton(value) {
    if (value != 'null') {
      this.bedrooms = Number(value)
    } else {
      this.bedrooms = 0
    }

    console.log(this.bedrooms)
    await Storage.set({
      key: 'Bed',
      value: this.bedrooms,
    });

  }
 

  async BathButton(value) {
    if (value != 'null') {
      this.bathrooms = Number(value)
    } else {
      this.bathrooms = 0
    }

    console.log(this.bathrooms)
    await Storage.set({
      key: 'Bath',
      value: this.bathrooms,
    });
  }

  

  async GARAGEButton(value) {
    if (value != 'null') {
      this.garages = Number(value)
    } else {
      this.garages = 0
    }

    console.log(this.garages)
    await Storage.set({
      key: 'Garage',
      value: this.garages,
    });

  }

 
  filter() {
    let bedroomsValues
    let bathroomsValues
    let garagesValues
    console.log("min " + this.min)
    console.log("max " + this.max)
    console.log("bedrooms " + this.bedrooms)

    if(this.bedrooms == 0){
      bedroomsValues=null
    }else{
      bedroomsValues=String(this.bedrooms)
    }

    if(this.bathrooms == 0){
      bathroomsValues=null
    }else{
      bathroomsValues=String(this.bathrooms)
    }

    if(this.garages == 0){
      garagesValues=null
    }else{
      garagesValues=String(this.garages)
    }

    this.propertyService.filterBySize(bedroomsValues, bathroomsValues, garagesValues, this.min, this.max)

    this.router.navigateByUrl("filteroutput")
  }
}
