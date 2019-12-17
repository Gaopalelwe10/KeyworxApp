import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { ProfileService } from './profile.service';
let PropertyService = class PropertyService {
    constructor(afs, alertCtrl, storage, profileService) {
        this.afs = afs;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.profileService = profileService;
        this.basePath = '/uploads';
    }
    addproperty(propertyid, property) {
        return this.afs.collection("properties").doc(propertyid).set(property);
    }
    imageList(propertyid) {
        return this.afs.collection("properties").doc(propertyid).collection("images").snapshotChanges();
    }
    propertyList() {
        return this.afs.collection("properties").snapshotChanges();
    }
    pushUpload(upload, propertyid) {
        let storageRef = firebase.storage().ref();
        let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
            // upload in progress
            upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, (error) => {
            // upload failed
            console.log(error);
        }, () => {
            // upload success
            // upload.url = uploadTask.snapshot.downloadURL
            upload.name = upload.file.name;
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                console.log('File available at', downloadURL);
                this.afs.collection("properties").doc(propertyid).collection("images").add({
                    downloadURL: downloadURL,
                    name: upload.file.name,
                });
            });
        });
    }
};
PropertyService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore,
        AlertController,
        AngularFireStorage,
        ProfileService])
], PropertyService);
export { PropertyService };
//# sourceMappingURL=property.service.js.map