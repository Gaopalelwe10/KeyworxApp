import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MessageService } from 'src/app/services/message.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ProfileService } from 'src/app/services/profile.service';
import { PropertyService } from 'src/app/services/property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  messageForm: FormGroup;
  userList;
  propertyList;
  currentUser;
  users: any;
  propertyid;
  agentUid;
 

  private User: AngularFirestoreDocument
  currentImage = null;

  store = {
    name: '',
    email: '',
    number: '',
    message: '', 
    uid: '',
    isRead: false,
    
  }
  constructor(
    private fb: FormBuilder, private afs: AngularFirestore,
    private messServ: MessageService,
    private profileServ: ProfileService,
    private propertyServ: PropertyService,
    private afAuth: AngularFireAuth,
    public composer: EmailComposer,
    private route: ActivatedRoute
  ) { 

    this.route.queryParams.subscribe(params => {
      if (params && params.propertyList){
        this.propertyList= JSON.parse(params.propertyList);
        this.propertyid=this.propertyList.propertyid
        this.agentUid=this.propertyList.uid;
        console.log(this.propertyList)
      }

  })

    this.messageForm = fb.group({
      name: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(30), Validators.required])],
      email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
      number: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.required])],
      message: ['', Validators.required]
    });

   const uid = this.profileServ.getUID();
    
   this.messServ.getUser(uid).subscribe(data => {
      this.userList = data;
      console.log(data)
    })

}

  ngOnInit() {
  }
  
  message(store){
   this.profileServ.getUID();
  //  return this.afs.collection("properties").doc(propertyid).set(property)

    this.afs.collection('message').add({
      name: this.userList.name,
      email: this.userList.email,
      number: this.store.number,
      message: this.store.message,
      isRead: this.store.isRead,
      AgentUid: this.propertyList.uid,
      propertyid: this.propertyList.propertyid,
      date: Date.now(),
    });
    console.log(this.store)
   
    this.composer.open({
      to:  'codersgroup2020@gmail.com',
      subject: 'property',
      body: this.store.message,
      isHtml: true
    })
    // let email = {
    //   to: 'codersgroup2020@gmail.com',
    //   attachments: [
    //     this.currentImage
    //   ],
    //   subject: 'property',
    //   body: this.store.message,
    //   isHtml: true
    // };
    // this.composer.open(email);
  }

}
