import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MessageService } from 'src/app/services/message.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ProfileService } from 'src/app/services/profile.service';
import { PropertyService } from 'src/app/services/property.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController, NavParams, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  messageForm: FormGroup;
  userList;
  propertyList: any;
  currentUser;
  users: any;
  propertyid;
  agentUid;

  name;
  email

  subject
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
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private messServ: MessageService,
    private profileServ: ProfileService,
    private propertyServ: PropertyService,
    private afAuth: AngularFireAuth,
    private emailComposer: EmailComposer,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private navParams: NavParams,
    public toastController: ToastController
  ) {

    this.propertyList = JSON.parse(this.navParams.get('propertyList'));
    this.propertyid = this.propertyList.propertyid
    this.agentUid = this.propertyList.uid;
    console.log(this.propertyid);
    console.log(this.agentUid)

    let slug = (this.propertyList.location).indexOf(',', (this.propertyList.location).indexOf(',') + 1)
    this.subject = this.propertyList.bedrooms + "  Bedroom " + this.propertyList.typeofproperty + " for Sale in " + this.propertyList.location.substring(0, slug)


    console.log(this.propertyList)

    // this.route.queryParams.subscribe(params => {
    //   if (params && params.propertyList) {
    //     this.propertyList = JSON.parse(params.propertyList);
    //     this.propertyid = this.propertyList.propertyid
    //     this.agentUid = this.propertyList.uid;
    //     console.log(this.propertyList)
    //   }

    // })

    this.messageForm = fb.group({
      name: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(30), Validators.required])],
      email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
      number: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.required])],
      message: ['', Validators.required]
    });

    const uid = this.profileServ.getUID();

    this.messServ.getUser(uid).subscribe(data => {
      this.userList = data;
      this.name = data.name;
      this.email = data.email;
      console.log(data)
    })

  }

  ngOnInit() {

  }

  async message(store) {
    this.profileServ.getUID();
    //  return this.afs.collection("properties").doc(propertyid).set(property)
    console.log(this.subject)

    this.afs.collection('message').add({
      name: this.userList.name,
      email: this.userList.email,
      number: this.store.number,
      message: this.store.message,
      isRead: this.store.isRead,
      AgentUid: this.agentUid,
      propertyid: this.propertyid,
      subject: this.subject,
      date: Date.now(),
    }).then(async () => {
      console.log(this.store)

      const toast = await this.toastController.create({
        color: 'primary',
        duration: 2000,
        message: 'Message successfully sent',
        // showCloseButton: true
      });
      toast.present();
      this.close()
    });


    // let email = {
    //   to: 'codersgroup2020@gmail.com',
    //   attachments: [
    //     this.currentImage
    //   ],
    //   subject: 'property',
    //   body: this.store.message,
    //   isHtml: true
    // };
    // this.emailComposer.open(email);
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
