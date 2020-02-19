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

  bondCalulatorForm:FormGroup
  i: number
  t: number
  amt: number
  p
  r: number
  n: number
  deposit: number = 0
  M: number
  a: number
  d: number
  c: number
  total: number
  propertyList: any;
  propertyid: any;
  agentUid: any;

  // items = {
  //   uid:"",
  //   propertyid:"",
  //   price:""
  // }
  constructor(private routeA: ActivatedRoute, private fb :FormBuilder
    // private fb: FormBuilder,
  ) {

    // this.route.queryParams
    //   .subscribe(params => {
    //     this.items.uid = params.uid;
    //      this.items.propertyid = params.propertyid;
    //     this.items.price = params.price;
    //     console.log(this.items.uid, this.items.propertyid,
    //       this.items.price )
    //   });
    this.bondCalulatorForm = fb.group({
      p:  ['', Validators.required],
      i: ['', Validators.required],
      t:['', Validators.required],
      deposit:['']
    });
    this.routeA.queryParams.subscribe(params => {
      if (params && params.data) {
        this.propertyList = JSON.parse(params.data);
        this.propertyid = this.propertyList.propertyid
        this.agentUid = this.propertyList.uid;
        console.log(this.propertyList)
        console.log(params)

      }
    });

    this.routeA.queryParams.subscribe(params => {
      this.p = params.price;
    });

  }

  ngOnInit() {
    this.routeA.queryParams.subscribe(params => {
      if (params && params.data) {
        this.propertyList = JSON.parse(params.data);
        this.propertyid = this.propertyList.propertyid
        this.agentUid = this.propertyList.uid;
        console.log(this.propertyList)

      }
    });


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
