import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  constructor(
    private router: Router,
    public propertyService:PropertyService
  ) { 
    this.propertyService.filterproperty().subscribe(data=>{
      console.log(data)
    })

  }

  ngOnInit() {
    // this.clickedButton(event, 1)
  
  }

  filter(){
    this.propertyService.filterBySize("1")
  }
  cancel() {
    this.router.navigateByUrl("tabs/home")
  }

  clickedButton(event, value) {
    let temp = event.srcElement.parentNode;
    // console.log(event)
    for (let i = 0; i < temp.childNodes.length; i++) {

      if (temp.childNodes[1].nodeName === 'ION-BUTTON') {
        console.log(temp.childNodes[i].nodeName + " " + value)
        if (temp.childNodes[i].classList.contains('active')) {
          temp.childNodes[i].classList.remove('active');
        }

      }
    }
    event.srcElement.classList.add('active')

  }

  BedButton(event, value) {
    let temp = event.srcElement.parentNode;
    // console.log(event)
    for (let i = 0; i < temp.childNodes.length; i++) {

      if (temp.childNodes[1].nodeName === 'ION-BUTTON') {
        console.log(temp.childNodes[i].nodeName + " " + value)
        if (temp.childNodes[i].classList.contains('active')) {
          temp.childNodes[i].classList.remove('active');
        }

      }
    }
    event.srcElement.classList.add('active')

  }

  BathButton(event, value) {
    let temp = event.srcElement.parentNode;
    // console.log(event)
    for (let i = 0; i < temp.childNodes.length; i++) {

      if (temp.childNodes[1].nodeName === 'ION-BUTTON') {
        console.log(temp.childNodes[i].nodeName + " " + value)
        if (temp.childNodes[i].classList.contains('active')) {
          temp.childNodes[i].classList.remove('active');
        }

      }
    }
    event.srcElement.classList.add('active')

  }

  GARAGEButton(event, value) {
    let temp = event.srcElement.parentNode;
    // console.log(event)
    for (let i = 0; i < temp.childNodes.length; i++) {

      if (temp.childNodes[1].nodeName === 'ION-BUTTON') {
        console.log(temp.childNodes[i].nodeName + " " + value)
        if (temp.childNodes[i].classList.contains('active')) {
          temp.childNodes[i].classList.remove('active');
        }

      }
    }
    event.srcElement.classList.add('active')

  }
}
