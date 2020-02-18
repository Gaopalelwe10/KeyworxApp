import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
let ProfileService = class ProfileService {
    constructor(afs, nav, afAuth, alertCtrl, storage, loadingCtrl) {
        this.afs = afs;
        this.nav = nav;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        afAuth.auth.onAuthStateChanged((user) => {
            if (user) {
                this.nav.navigateRoot("tabs/home");
            }
            else {
                this.nav.navigateRoot("");
            }
        });
    }
    login(email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.afAuth.auth.signInWithEmailAndPassword(email, password).then((success) => {
                console.log(success);
            }).catch((err) => {
                this.alertCtrl.create({
                    // message: 'You can not order more than six',
                    subHeader: err.message,
                    buttons: ['Ok']
                }).then(alert => alert.present());
            });
        });
    }
    signup(registerdetails, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = this.loadingCtrl.create({
                message: 'Registering, Please wait...'
            });
            (yield loading).present();
            yield this.afAuth.auth.createUserWithEmailAndPassword(registerdetails.email, password).then((success) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                registerdetails.uid = this.afAuth.auth.currentUser.uid;
                console.log(success);
                (yield loading).dismiss();
                this.afs.collection('users').doc(this.afAuth.auth.currentUser.uid).set(registerdetails).then(data => {
                });
            })).catch((err) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                (yield loading).dismiss();
                this.alertCtrl.create({
                    subHeader: err.message,
                    buttons: ['Ok']
                }).then(alert => alert.present());
            }));
        });
    }
    logout() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.afAuth.auth.signOut().then((success) => {
                console.log(success);
                console.log("success");
                this.nav.navigateRoot("login");
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    getUID() {
        return this.afAuth.auth.currentUser.uid;
    }
};
ProfileService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore,
        NavController,
        AngularFireAuth,
        AlertController,
        AngularFireStorage,
        LoadingController])
], ProfileService);
export { ProfileService };
//# sourceMappingURL=profile.service.js.map