import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.page.html',
  styleUrls: ['./fullscreen.page.scss'],
})
export class FullscreenPage implements OnInit {
  calculator: FormGroup;
  pic = {
    downloadURL: "",
  }
  i: number
  t: number
  amt: number
  p: number = 0
  r: number
  n: number
  deposit: number = 0
  M: number 
  a: number
  d: number
  c: number
  total: number

  constructor(private route: ActivatedRoute,  
      // private fb: FormBuilder,

  ) {

    this.route.queryParams
      .subscribe(params => {
        this.pic.downloadURL = params.downloadURL;
        console.log(this.pic.downloadURL)
      });
      // this.calculator = fb.group({
      //   deposit: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.minLength(1), Validators.maxLength(10), Validators.required])],
      //   // email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
       
  
      // });
  }

  ngOnInit() {
    this.r = (this.i / 100) / 12;
    this.n = this.t * 12;
  }

  calculate() {
    this.r = (this.i / 100) / 12;
    console.log(this.r)

    this.n = this.t * 12;
    console.log(this.i)

    this.p = this.p - this.deposit;
    console.log(this.p)

    this.c = this.r * ((1 + this.r) ** this.n)
    this.d = ((1 + this.r) ** this.n) - 1
    this.a = this.c / this.d
    console.log(this.a)

    this.M = this.p * this.a
    console.log(this.M)

    this.total = this.M * this.n
    console.log(this.total)
  }


}
