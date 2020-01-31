import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CategoryService } from 'src/app/services/category.service';
import { MapboxService, Feature } from 'src/app/services/mapbox.service';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.page.html',
  styleUrls: ['./filter-category.page.scss'],
})
export class FilterCategoryPage implements OnInit {

  SeachLocation = ''
  min: number = 100000;
  max: number;
  bedrooms;
  bathrooms;
  garages;
  category="sale"

  list = [0, 1, 2, 3, 4, 5];
  // prices = [100000, 150000, 200000, 250000, 300000, 350000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000, 6000000, 7000000, 8000000, 10000000, 15000000]
  pricesMin = [{ id: 0, value: 0 }, { id: 1, value: 100000 }, { id: 2, value: 150000 }, { id: 3, value: 200000 }, { id: 4, value: 250000 }, { id: 5, value: 300000 }, { id: 6, value: 350000 }, { id: 7, value: 400000 }, { id: 8, value: 500000 }, { id: 9, value: 600000 }, { id: 10, value: 700000 }, { id: 11, value: 800000 }, { id: 12, value: 900000 }, { id: 13, value: 1000000 }, { id: 14, value: 1500000 }, { id: 15, value: 2000000 }, { id: 16, value: 2500000 }, { id: 17, value: 3000000 }, { id: 18, value: 4000000 }, { id: 19, value: 4500000 }, { id: 20, value: 5000000 }, { id: 21, value: 5500000 }, { id: 22, value: 6000000 }, { id: 23, value: 7000000 }, { id: 24, value: 8000000 }, { id: 25, value: 9000000 }, { id: 26, value: 10000000 }, { id: 27, value: 15000000 }]
  pricesMax = [{ id: 0, value: 1000000000000000000 }, { id: 1, value: 100000 }, { id: 2, value: 150000 }, { id: 3, value: 200000 }, { id: 4, value: 250000 }, { id: 5, value: 300000 }, { id: 6, value: 350000 }, { id: 7, value: 400000 }, { id: 8, value: 500000 }, { id: 9, value: 600000 }, { id: 10, value: 700000 }, { id: 11, value: 800000 }, { id: 12, value: 900000 }, { id: 13, value: 1000000 }, { id: 14, value: 1500000 }, { id: 15, value: 2000000 }, { id: 16, value: 2500000 }, { id: 17, value: 3000000 }, { id: 18, value: 4000000 }, { id: 19, value: 4500000 }, { id: 20, value: 5000000 }, { id: 21, value: 5500000 }, { id: 22, value: 6000000 }, { id: 23, value: 7000000 }, { id: 24, value: 8000000 }, { id: 25, value: 9000000 }, { id: 26, value: 10000000 }, { id: 27, value: 15000000 }]

  compareWithMin: any;
  compareWithMax: any;

  MyDefaultMinPriceValue: string;
  SelectedMinPriceValue: any;

  MyDefaultMaxPriceValue: string;
  SelectedMaxPriceValue: any;

  
  addresses: string[] = [];
  coodinateses: string[] = [];

  selectedAddress = null;
  selectedcoodinates = null;
  listMabox: any;
  listMaboxText:any;
  lng;
  lat;
  constructor(
    private router: Router,
    public categoryService: CategoryService,
    private navC: NavController,
    public mapboxService: MapboxService,

  ) {
    this.getFilterValues();
  }

  ngOnInit() {
    // this.clickedButton(event, 1)
    this.MyDefaultMinPriceValue = String(this.categoryService.min);
    this.compareWithMin = this.compareWithFnMin;
    this.SelectedMinPriceValue = this.MyDefaultMinPriceValue;

    this.MyDefaultMaxPriceValue = String(this.categoryService.max);
    this.compareWithMax = this.compareWithFnMax;
    this.SelectedMaxPriceValue = this.MyDefaultMaxPriceValue;
  }

  async getFilterValues() {
    // const { value }: any = await Storage.get({ key: 'Bed' });
    // this.SeachLocation = this.categoryService.searchL
    this.selectedAddress = this.categoryService.searchL
    this.bedrooms = Number(this.categoryService.bed);
    this.bathrooms = Number(this.categoryService.bath);
    this.garages = Number(this.categoryService.garage);
    console.log('Bed ' + this.bedrooms)
    console.log('Bath ' + this.bathrooms)
    console.log('Garage ' + this.garages)
  }


  cancel() {
    this.router.navigateByUrl("tabs/home")
  }

  search(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm && searchTerm.length > 0) {
      this.mapboxService.search_word(searchTerm)
        .subscribe((features: Feature[]) => {
          this.addresses = features.map(feat => feat.place_name)
          this.coodinateses = features.map(feat => feat.geometry)
          this.listMabox = features;
          this.listMaboxText=features.map(feat => feat.text)
          console.log(this.listMabox)
        });
    } else {
      this.addresses = [];
    }
  }

  onSelect(address, i) {
   
    //  selectedcoodinates=

    console.log("lng:" + JSON.stringify(this.listMabox[i].geometry.coordinates[0]))
    console.log("lat:" + JSON.stringify(this.listMabox[i].geometry.coordinates[1]))
    this.lng = JSON.stringify(this.listMabox[i].geometry.coordinates[0])
    this.lat = JSON.stringify(this.listMabox[i].geometry.coordinates[1])

    console.log("index =" + i)
    console.log(address)
    console.log(this.listMabox[i].text)
    this.selectedAddress=this.listMabox[i].text
    this.addresses = [];
  }
  async BedButton(value1) {
    this.bedrooms = Number(value1)
    this.categoryService.bed = this.bedrooms

  }


  async BathButton(value) {
    this.bathrooms = Number(value)
    this.categoryService.bath = this.bathrooms
  }



  async GARAGEButton(value) {
    this.garages = Number(value)
    this.categoryService.garage = this.garages
  }
  compareWithFnMin(o1, o2) {
    return o1 === o2;
  };

  compareWithFnMax(o1, o2) {
    return o1 === o2;
  };

  onSelectChangeMin(selectedValue: any) {
    this.SelectedMinPriceValue = selectedValue.detail.value;
    console.log('minv' + this.SelectedMinPriceValue)
    this.categoryService.min = this.SelectedMinPriceValue;
  }

  onSelectChangeMax(selectedValue: any) {
    this.SelectedMaxPriceValue = selectedValue.detail.value;
    console.log('maxv' + this.SelectedMaxPriceValue)
    this.categoryService.max = this.SelectedMaxPriceValue;
  }


  filter() {
    let bedroomsValues
    let bathroomsValues
    let garagesValues
    this.min = Number(this.SelectedMinPriceValue)
    this.max = Number(this.SelectedMaxPriceValue)
    this.categoryService.searchL = this.selectedAddress
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

    this.categoryService.filterBySizeCategory(this.category,bedroomsValues, bathroomsValues, garagesValues, this.min, this.max)
    this.router.navigateByUrl('category')
  }

}
