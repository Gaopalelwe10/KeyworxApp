import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  messageForm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { 
    this.messageForm = fb.group({
      name: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(30), Validators.required])],
      email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
      number: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.required])],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  
  message(){

  }

}
