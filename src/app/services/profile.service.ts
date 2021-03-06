import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user: Observable<User>
  private userDoc: AngularFirestoreDocument<User>

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
      }
      // else {
      //   this.nav.navigateRoot("login");
      // }
    })
  }

  async login(email: string, password: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password).then((success) => {
      console.log(success);
    }).catch((err) => {
      this.alertCtrl.create({
        message: err.message,
        // subHeader: err.message,
        buttons: ['Ok'],
        cssClass: 'custom-alert',
      }).then(
        alert => alert.present()
      );
    })
  }

  async signup(registerdetails, password) {
    const loading = this.loadingCtrl.create({
      // message: 'Registering, Please wait...'
      cssClass: 'custom-loader',
      spinner: "crescent",
    });
    (await loading).present();
    await this.afAuth.auth.createUserWithEmailAndPassword(registerdetails.email, password).then(async (success) => {
      registerdetails.uid = this.afAuth.auth.currentUser.uid
      console.log(success);
      localStorage.setItem("user", registerdetails.email);
      (await loading).dismiss();
      this.afs.collection('users').doc(this.afAuth.auth.currentUser.uid).set(registerdetails).then(data => {

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

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  async logout() {
    await this.afAuth.auth.signOut().then((success) => {
      console.log(success);
      localStorage.clear()
      console.log("success");
      this.nav.navigateRoot("login");
    }).catch((error) => {
      console.log(error)
    })
  }

  getUID(): string {
    return this.afAuth.auth.currentUser.uid;
  }

  getUser(key) {
    this.userDoc = this.afs.doc<User>('users/' + key);
    return this.userDoc.valueChanges();
  }

  agentProfile(agentUid) {
    return this.afs.collection('agent').doc(agentUid).valueChanges();
  }


  async addAdmin(registerdetails, password) {
    return await this.afAuth.auth.createUserWithEmailAndPassword(registerdetails.email, password).then(user => {
      // const firebase = require('firebase');
      // const firebaseFunction = firebase.functions();
      // const adminRole = firebaseFunction.httpsCallable('addAdmin');
      // return adminRole({ email: registerdetails.email }).then(result => {

      //   registerdetails.uid = this.afAuth.auth.currentUser.uid
      //   registerdetails.role="admin"
      //   localStorage.setItem("user", registerdetails.email);
      //   // (await loading).dismiss();
      //   this.afs.collection('users').doc(this.afAuth.auth.currentUser.uid).set(registerdetails).then(data => {
  
      //   })

      //   return result;

      // });
    });
  }
}