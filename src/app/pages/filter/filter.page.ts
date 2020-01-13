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
  garages: string;
  @ViewChild('myDiv', { static: true }) myDiv: ElementRef<HTMLElement>;
  buttonColor: string = '#000'; //Default Color
  constructor(
    private router: Router,
    public propertyService: PropertyService
  ) {
    this.propertyService.filterproperty().subscribe(data => {
      console.log("fiter" + data)
    })
   
  }

  ngOnInit() {
    // this.clickedButton(event, 1)
    this.getItem()
  }
  addEvent() {
    this.buttonColor = '#345465'; //desired Color

    /*
    YOUR FUNCTION CODE
    */

  }
  async setItem() {
    await Storage.set({
      key: 'name',
      value: 'Max'
    });
  }


  cancel() {
    this.router.navigateByUrl("tabs/home")
  }

  async BedButton(event, value) {

    let temp = event.srcElement.parentNode;
    this.bedrooms = value
    console.log(this.bedrooms)

    for (let i = 0; i < temp.childNodes.length; i++) {

      if (temp.childNodes[1].nodeName === 'ION-BUTTON') {

        if (temp.childNodes[i].classList.contains('active')) {
          temp.childNodes[i].classList.remove('active');
        }

      }
    }
    await Storage.set({
      key: 'Bed',
      value:  event,
    });
    event.srcElement.classList.add('active')

  }
  async getItem() {
    const { value } :any = await Storage.get({ key: 'Bed' });
    console.log('Got item: ', value);
    value.srcElement.classList.add('active')
  }
  BathButton(event, value) {
    this.getItem()
    let temp = event.srcElement.parentNode;
    this.bathrooms = value
    console.log(this.bathrooms)

    for (let i = 0; i < temp.childNodes.length; i++) {

      if (temp.childNodes[i].nodeName === 'ION-BUTTON') {

        if (temp.childNodes[i].classList.contains('active')) {
          temp.childNodes[i].classList.remove('active');
        }

      }
    }
    event.srcElement.classList.add('active')

  }

  GARAGEButton(event, value) {
    let temp = event.srcElement.parentNode;
    this.garages = value
    console.log(this.garages)

    for (let i = 0; i < temp.childNodes.length; i++) {

      if (temp.childNodes[i].nodeName === 'ION-BUTTON') {


        if (temp.childNodes[i].classList.contains('active')) {
          temp.childNodes[i].classList.remove('active');
        }

      }
    }
    event.srcElement.classList.add('active')

  }

  filter() {
    console.log("min " + this.min)
    console.log("max " + this.max)
    this.propertyService.filterBySize(this.bedrooms, this.bathrooms, this.garages, this.min, this.max)

    this.router.navigateByUrl("filteroutput")
  }
}
