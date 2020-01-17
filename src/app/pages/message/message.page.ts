import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MessageService } from 'src/app/services/message.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  messageForm: FormGroup;

  currentImage = null;

  store = {
    name: '',
    email: '',
    number: '',
    message: ''

  }
  constructor(
    private fb: FormBuilder, 
    private afs: AngularFirestore,
    private messServ: MessageService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private emailComposer: EmailComposer,
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
  
  message(store){
     this.afAuth.auth.currentUser.uid;
    this.afs.collection('message').doc(this.afAuth.auth.currentUser.uid).set({
      name: this.store.name,
      email: this.store.email,
      number: this.store.number,
      message: this.store.message
    });
    console.log(this.store)
   
    let email = {
      to: 'codersgroup2020@gmail.com',
      attachments: [
        this.currentImage
      ],
      subject: 'property',
      body: this.store.message,
      isHtml: true
    };
    this.emailComposer.open(email);
  }

}
