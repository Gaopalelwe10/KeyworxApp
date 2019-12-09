import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { Upload } from '../uploads/shared/upload';
import * as firebase from 'firebase'
import { AngularFireList } from '@angular/fire/database';
import { ProfileService } from './profile.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private basePath: string = '/uploads';
  uploads: AngularFireList<Upload[]>;

  imageURL

  items$
  minFilter$: BehaviorSubject<string|null>;
  maxFilter$: BehaviorSubject<string|null>;
  bedroomsFilter$: BehaviorSubject<string|null>;
  bathroomsFilter$: BehaviorSubject<string|null>;
  garagesFilter$: BehaviorSubject<string|null>;


  constructor(
    private afs: AngularFirestore,
    private alertCtrl: AlertController,
    private storage: AngularFireStorage,
    private profileService: ProfileService 
  ) {
    this.bedroomsFilter$ = new BehaviorSubject(null);
    this.bathroomsFilter$ = new BehaviorSubject(null);
    this.garagesFilter$ = new BehaviorSubject(null);
    this.minFilter$ = new BehaviorSubject(null);
    this.maxFilter$ = new BehaviorSubject(null);
  }

  filterproperty(){
    // this.sizeFilter$ = new BehaviorSubject(null);
    // this.bathroomsFilter$ = new BehaviorSubject(null);
    return this.items$ = combineLatest(
      this.bedroomsFilter$,
      this.bathroomsFilter$,
      this.garagesFilter$,
      this.minFilter$,
      this.maxFilter$
    ).pipe(
      switchMap(([bedrooms, bathrooms,garages,min, max]) => 
        this.afs.collection('properties', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          // if (bedrooms) { query = (query.where('bedrooms', '==', bedrooms) &&query.where('bedrooms', '==', bedrooms))};
          if (bedrooms) { query = query.where('bedrooms', '==', bedrooms) };
          if (bathrooms) { query = query.where('bathrooms', '==', bathrooms) };
          if (garages) { query = query.where('garage', '==', garages) };
          return query;
        }).valueChanges()
      )
    );
  }


  addproperty(propertyid, property) {
    return this.afs.collection("properties").doc(propertyid).set(property)
  }

  imageList(propertyid){
    return this.afs.collection("properties").doc(propertyid).collection("images").snapshotChanges()
  }

  propertyList(){
   
    return this.items$ = combineLatest(
      this.bedroomsFilter$,
      this.bathroomsFilter$,
      this.garagesFilter$,
      this.minFilter$,
      this.maxFilter$
    ).pipe(
      switchMap(([bedrooms, bathrooms,garages,min, max]) => 
        this.afs.collection('properties', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          // if (bedrooms) { query = (query.where('bedrooms', '==', bedrooms) &&query.where('bedrooms', '==', bedrooms))};
          if (bedrooms) { query = query.where('bedrooms', '==', bedrooms) };
          if (bathrooms) { query = query.where('bathrooms', '==', bathrooms) };
          if (garages) { query = query.where('garage', '==', garages) };
          return query;
        }).snapshotChanges()
      )
    );
    // return this.afs.collection("properties").snapshotChanges()
  }

  filterBySize(bedrooms: string|null, bathrooms: string|null,garages: string|null) {
    this.bedroomsFilter$.next(bedrooms);
    this.bathroomsFilter$.next(bathrooms)
    this.garagesFilter$.next(garages)
    console.log("dx" + bedrooms)
  }
  pushUpload(upload: Upload, propertyid) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        // upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name

        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);

          this.afs.collection("properties").doc(propertyid).collection("images").add({
            downloadURL: downloadURL,
            name: upload.file.name,

          })
        });



      }
    );
  }
}
