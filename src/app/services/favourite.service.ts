import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProfileService } from './profile.service';
import * as _ from "lodash";
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(
    private afs: AngularFirestore,
    private profileService: ProfileService
  ) { }

  getfavourite() {
    return this.afs.collection('favourite').snapshotChanges();
  }

  getfavouriteUser() {
    return this.afs.collection('favourite', ref=>ref.where(this.profileService.getUID() ,'==' ,0) ).snapshotChanges();
  }

  
  updatefavourite(propertyId, userid, reaction = 0) {
    const data = { [userid]: reaction }
    this.afs.collection('favourite').doc(propertyId).update(data).then((data) => {

    }).catch(() => {
      this.afs.collection('favourite').doc(propertyId).set(data)
    })
  }

  // updatefavourite(propertyId, userid, reaction = 0) {
  //   const data = { [userid]: reaction }
  //   this.afs.collection("properties").doc(propertyId).collection('favourite').doc(propertyId).update(data).then((data) => {

  //   }).catch(() => {
  //     this.afs.collection("properties").doc(propertyId).collection('favourite').doc(propertyId).set(data)
  //   })
  // }

  count(propertyId) {
    return this.afs.collection('favourite').doc(propertyId).valueChanges()
  }

  countfavourite(favourite) {
    return _.mapValues(_.groupBy(favourite), 'length')
  }

  removefavourite(propertyId, userid) {
    const data = { [userid]: firebase.firestore.FieldValue.delete() }
    return this.afs.collection('favourite').doc(propertyId).update(data);
  }

  // removefavourite(propertyId, userid) {
  //   const data = { [userid]: firebase.firestore.FieldValue.delete() }
  //   return  this.afs.collection("properties").doc(propertyId).collection('favourite').doc(propertyId).update(data);
  // }

  userfavourite(favourite: Array<any>) {
    const userID =this.profileService.getUID()
    return _.get(favourite, userID)
  }


}
