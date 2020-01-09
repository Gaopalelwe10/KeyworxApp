import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  category(value){
    return this.afs.collection("properties",ref=>ref.where('category' ,'==' ,value)).snapshotChanges()
  }
}
