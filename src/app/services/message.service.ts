import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private afs: AngularFirestore
  ) { }

  addMail(message){
    return this.afs.collection('messages').doc()
  }
}
