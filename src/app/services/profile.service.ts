import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private afs: AngularFirestore,
    private nav: NavController,
    public afAuth: AngularFireAuth,
    private alertCtrl: AlertController,
    private storage: AngularFireStorage,
    private loadingCtrl: LoadingController
  ) { 
    afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.nav.navigateRoot("tabs/home");
      } else {
        this.nav.navigateRoot("");
      }
    })
  }

  async login(email: string, password: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password).then((success) => {
      console.log(success);
    }).catch((err) => {
      this.alertCtrl.create({
        // message: 'You can not order more than six',
        subHeader: err.message,
        buttons: ['Ok']
      }).then(
        alert => alert.present()
      );
    })
  }
  async signup(registerdetails, password) {
    const loading = this.loadingCtrl.create({
      message: 'Registering, Please wait...'
    });
    (await loading).present();
    await this.afAuth.auth.createUserWithEmailAndPassword(registerdetails.email,password).then(async (success) => {
      registerdetails.uid=this.afAuth.auth.currentUser.uid
      console.log(success);
      (await loading).dismiss();
      this.afs.collection('users').doc(this.afAuth.auth.currentUser.uid).set(registerdetails).then( data=>{
      
      })
    
    }).catch(async (err) => {

      (await loading).dismiss();
      
      this.alertCtrl.create({
        subHeader: err.message,
        buttons: ['Ok']
      }).then(
        alert => alert.present()
      );

    })
  }

  async logout() {
    await this.afAuth.auth.signOut().then((success) => {
      console.log(success);
      console.log("success");
      this.nav.navigateRoot("login");
    }).catch((error) => {
      console.log(error)
    })
  }
}
