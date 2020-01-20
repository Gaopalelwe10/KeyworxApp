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

  
  updatefavourite(feedId, userid, reaction = 0) {
    const data = { [userid]: reaction }
    this.afs.collection('favourite').doc(feedId).update(data).then((data) => {

    }).catch(() => {
      this.afs.collection('favourite').doc(feedId).set(data)
    })
  }

  count(feedId) {
    return this.afs.collection('favourite').doc(feedId).valueChanges()
  }

  countfavourite(favourite) {
    return _.mapValues(_.groupBy(favourite), 'length')
  }

  removefavourite(feedId, userid) {
    const data = { [userid]: firebase.firestore.FieldValue.delete() }
    return this.afs.collection('favourite').doc(feedId).update(data);
  }

  userfavourite(favourite: Array<any>) {
    const userID =this.profileService.getUID()
    return _.get(favourite, userID)
  }


}
