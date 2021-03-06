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
  archived$: BehaviorSubject<boolean>;

  constructor(
    private afs: AngularFirestore,
    private alertCtrl: AlertController,
    private storage: AngularFireStorage,
    private profileService: ProfileService
  ) {
    this.bedroomsFilter$ = new BehaviorSubject(null);
    this.bathroomsFilter$ = new BehaviorSubject(null);
    this.garagesFilter$ = new BehaviorSubject(null);
    this.archived$ = new BehaviorSubject(false)
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
          query = query.where('archived', '==', false);
          // if (category) { query = query.where('category', '==', category) };
          if (bedrooms) { query = query.where('bedrooms', '==', bedrooms) };
          if (bathrooms) { query = query.where('bathrooms', '==', bathrooms) };
          if (garages) { query = query.where('garage', '==', garages) };
          if (min) { query = query.where('price', '>=', min) };
          if (max) { query = query.where('price', '<=', max) };
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
    return this.afs.collection("properties", ref => ref.where('archived', '==', false)).snapshotChanges()

  }

  propertyListPopular() {
    return this.afs.collection("properties", ref => ref.where('archived', '==', false).where('reactionCount','>=', 2)).snapshotChanges()
  }


  filterBySize(bedrooms: string | null, bathrooms: string | null, garages: string | null, min: number, max: number) {
    this.bedroomsFilter$.next(bedrooms);
    this.bathroomsFilter$.next((bathrooms));
    this.garagesFilter$.next((garages));
    console.log(bedrooms)
    this.minFilter$ = new BehaviorSubject(Number(min));
    this.maxFilter$ = new BehaviorSubject(Number(max));

  }

  minv
  maxv
  bedv
  bathv
  garagev
  searchL

  set location(location) {
    this.searchL = location
  }

  get location() {
    if (this.searchL == null || this.searchL == '') {
      return this.searchL = ''
    } else {
      return this.searchL = this.searchL
    }
  }

  set min(min) {
    this.minv = min
  }

  get min() {
    if (this.minv == null) {
      return this.minv = 0
    } else {
      return this.minv = this.minv
    }
  }

  set max(max) {
    this.maxv = max
  }

  get max() {
    if (this.maxv == null) {
      return this.maxv = 1000000000000000000
    } else {
      return this.maxv = this.maxv
    }
  }

  set bed(bed) {
    this.bedv = bed
  }

  get bed() {
    if (this.bedv == null) {
      return this.bedv = 0
    } else {
      return this.bedv = this.bedv
    }
  }


  set bath(bath) {
    this.bathv = bath
  }

  get bath() {
    if (this.bathv == null) {
      return this.bathv = 0
    } else {
      return this.bathv = this.bathv
    }
  }

  set garage(garage) {
    this.garagev = garage
  }

  get garage() {
    if (this.garagev == null) {
      return this.garagev = 0
    } else {
      return this.garagev = this.garagev
    }
  }

}
