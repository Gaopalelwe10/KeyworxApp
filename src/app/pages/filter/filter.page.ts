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
  min: number = 100000;
  max: 1000000000000000000;
  bedrooms;
  bathrooms;
  garages;
  minv

  list = [0, 1, 2, 3, 4, 5];
  // prices = [100000, 150000, 200000, 250000, 300000, 350000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000, 6000000, 7000000, 8000000, 10000000, 15000000]
  prices = [{ id: 1, value: 100000 }, { id: 2, value: 150000 }, { id: 3, value: 200000 }, { id: 4, value: 250000 }, { id: 5, value: 300000 }, { id: 6, value: 350000 }, { id: 7, value: 400000 }, { id: 8, value: 500000 }, { id: 9, value: 600000 }, { id: 10, value: 700000 }, { id: 11, value: 800000 }, { id: 12, value: 900000 }]
  compareWith: any;
  MyDefaultYearIdValue: string;
  constructor(
    private router: Router,
    public propertyService: PropertyService,

  ) {
    this.getFilterValues();
    this.minv = 7
  }

  ngOnInit() {
    // this.clickedButton(event, 1)
    this.MyDefaultYearIdValue = "2";
    this.compareWith = this.compareWithFn;
  }

  async getFilterValues() {
    // const { value }: any = await Storage.get({ key: 'Bed' });

    this.bedrooms = Number(this.propertyService.bed);
    this.bathrooms = Number(this.propertyService.bath);
    this.garages = Number(this.propertyService.garage);
    console.log('Bed ' + this.bedrooms)
    console.log('Bath ' + this.bathrooms)
    console.log('Garage ' + this.garages)
  }


  cancel() {
    this.router.navigateByUrl("tabs/home")
  }

  async BedButton(value1) {
    this.bedrooms = Number(value1)
    this.propertyService.bed = this.bedrooms

  }


  async BathButton(value) {
    this.bathrooms = Number(value)
    this.propertyService.bath = this.bathrooms
  }



  async GARAGEButton(value) {
    this.garages = Number(value)
    this.propertyService.garage = this.garages
  }
  compareWithFn(o1, o2) {
    return o1 === o2;
  };
  // compareWithFn = (o1, o2) => {
  //   return o1 && o2 ? o1.id === o2.id : o1 === o2;
  // };

  // compareWith = this.compareWithFn;
  filter() {
    let bedroomsValues
    let bathroomsValues
    let garagesValues
    console.log("min " + this.min)
    console.log("max " + this.max)
    console.log("bedrooms " + this.bedrooms)

    if (this.bedrooms == 0) {
      bedroomsValues = null
    } else {
      bedroomsValues = String(this.bedrooms)
    }

    if (this.bathrooms == 0) {
      bathroomsValues = null
    } else {
      bathroomsValues = String(this.bathrooms)
    }

    if (this.garages == 0) {
      garagesValues = null
    } else {
      garagesValues = String(this.garages)
    }

    this.propertyService.filterBySize(bedroomsValues, bathroomsValues, garagesValues, this.min, this.max)

    this.router.navigateByUrl("filteroutput")
  }
}
