import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  min:number=0 ;
  max:1000000000000000000;
  bedrooms ;
  bathrooms ;
  garages:string ;

  constructor(
    private router: Router,
    public propertyService: PropertyService
  ) {
    this.propertyService.filterproperty().subscribe(data => {
      console.log("fiter" +data)
    })

  }

  ngOnInit() {
    // this.clickedButton(event, 1)

  }

  
  cancel() {
    this.router.navigateByUrl("tabs/home")
  }

  BedButton(event, value) {

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
    event.srcElement.classList.add('active')

  }

  BathButton(event, value) {
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
    this.propertyService.filterBySize( this.bedrooms,this.bathrooms,this.garages, this.min,this.max)

    this.router.navigateByUrl("filteroutput")
  }
}
