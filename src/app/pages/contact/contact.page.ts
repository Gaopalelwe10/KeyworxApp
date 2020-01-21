import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
 

  constructor(  public composer:EmailComposer
    ) {
    
    
     }

  ngOnInit() {
  }

  OpenEmailComposer(){
    this.composer.open({
      to:'khodani1994@gmail.com'
    })
  }
}
