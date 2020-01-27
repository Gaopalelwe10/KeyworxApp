import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  user: Observable<User>
  private userDoc : AngularFirestoreDocument<User>
  

  constructor(
    private afs: AngularFirestore
  ) { 
    
  }

  getUser(key){
    this.userDoc = this.afs.doc<User>('users/' + key);
    return this.userDoc.valueChanges();
  }
  
}
