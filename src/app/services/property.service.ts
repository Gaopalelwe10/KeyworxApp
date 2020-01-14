import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';

import * as firebase from 'firebase'
import { AngularFireList } from '@angular/fire/database';
import { ProfileService } from './profile.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  imageURL
  items$
  minFilter$: BehaviorSubject<number>;
  maxFilter$: BehaviorSubject<number>;
  bedroomsFilter$: BehaviorSubject<string | null>;
  bathroomsFilter$: BehaviorSubject<string | null>;
  garagesFilter$: BehaviorSubject<string | null>;


  constructor(
    private afs: AngularFirestore,
    private alertCtrl: AlertController,
    private storage: AngularFireStorage,
    private profileService: ProfileService
  ) {
    this.bedroomsFilter$ = new BehaviorSubject(null);
    this.bathroomsFilter$ = new BehaviorSubject(null);
    this.garagesFilter$ = new BehaviorSubject(null);
    this.minFilter$ = new BehaviorSubject(0);
    this.maxFilter$ = new BehaviorSubject(1000000000000000);
  }

  filterproperty() {
    // return this.afs.collection('properties', ref=>ref.orderBy('location')).valueChanges();
    return this.items$ = combineLatest(
      this.bedroomsFilter$,
      this.bathroomsFilter$,
      this.garagesFilter$,
      this.minFilter$,
      this.maxFilter$
    ).pipe(
      switchMap(([bedrooms, bathrooms, garages, min, max]) =>
        this.afs.collection('properties', ref => {
          let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (min) { query = query.where('price', '>=', min) };
          if (max) { query = query.where('price', '<=', max) };
          if (bedrooms) { query = query.where('bedrooms', '==', bedrooms) };
          if (bathrooms) { query = query.where('bathrooms', '==', bathrooms) };
          if (garages) { query = query.where('garage', '==', garages) };
          return query;
        }).snapshotChanges()
      )
    );
  }


  addproperty(propertyid, property) {
    return this.afs.collection("properties").doc(propertyid).set(property)
  }

  imageList(propertyid) {
    return this.afs.collection("properties").doc(propertyid).collection("images").snapshotChanges()
  }

  getpropertyDetails(propertyid) {
    return this.afs.collection("properties").doc(propertyid).valueChanges();
  }
  getpropertyFavourite(propertyid) {
    return this.afs.collection("properties").doc(propertyid).snapshotChanges()
  }
  propertyList() {

    // return this.items$ = combineLatest(
    //   this.bedroomsFilter$,
    //   this.bathroomsFilter$,
    //   this.garagesFilter$,
    //   this.minFilter$,
    //   this.maxFilter$
    // ).pipe(
    //   switchMap(([bedrooms, bathrooms, garages, min, max]) =>
    //     this.afs.collection('properties', ref => {
    //       let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
    //       if (min) { query = query.where('price', '>=', min) };
    //       if (max) { query = query.where('price', '<=', max) };
    //       if (bedrooms) { query = query.where('bedrooms', '==', bedrooms) };
    //       if (bathrooms) { query = query.where('bathrooms', '==', bathrooms) };
    //       if (garages) { query = query.where('garage', '==', garages) };
    //       return query;
    //     }).snapshotChanges()
    //   )
    // );
    return this.afs.collection("properties", ref => ref.orderBy('location')).snapshotChanges()
  }

  filterBySize(bedrooms: string | null, bathrooms: string | null, garages: string | null, min: number, max: number) {
    this.bedroomsFilter$.next(bedrooms);
    this.bathroomsFilter$.next((bathrooms));
    this.garagesFilter$.next((garages));
    console.log(bedrooms)
    this.minFilter$ = new BehaviorSubject(Number(min));
    this.maxFilter$ = new BehaviorSubject(Number(100000000000000000000));
    console.log("dx" + max)
  }

}
