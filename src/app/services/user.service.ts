import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath = '/Users';

  UsersRef: AngularFirestoreCollection<User> = null;

  constructor(private db: AngularFirestore) {
    this.UsersRef = db.collection(this.dbPath);
  }

  createUser(User: User): void {
    this.UsersRef.add({ ...User });
  }

  updateUser(key: string, value: any): Promise<void> {
    return this.UsersRef.doc(key).update(value);
  }

  deleteUser(key: string): Promise<void> {
    return this.UsersRef.doc(key).delete();
  }

  getUsersList(): AngularFirestoreCollection<User> {
    return this.UsersRef;
  }

  deleteAll() {
    this.UsersRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }
}
