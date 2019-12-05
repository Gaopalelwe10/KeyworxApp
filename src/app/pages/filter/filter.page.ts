import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  constructor(
    private router :Router,
  ) { }

  ngOnInit() {
  }

  cancel(){
    this.router.navigateByUrl("tabs/home")
  }
}
