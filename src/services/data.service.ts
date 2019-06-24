import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  static location: Location;
  constructor(private database: AngularFirestore) {
    DataService.location = new Location();
    DataService.location.Menu = database.collection('Location').doc('aeMFrRDSm3HJvnb2pBrr').collection('Menu').valueChanges();
    DataService.location.Orders = database.collection('Location').doc('aeMFrRDSm3HJvnb2pBrr').collection('Orders').valueChanges();
    DataService.location.Parties = database.collection('Location').doc('aeMFrRDSm3HJvnb2pBrr').collection('Parties').valueChanges();    
  }

  addParty()
  addParty(table: number)
  addParty(table: number, size: number)
  addParty(table?: number, size?: number) {
    if (!size) { size = 1 }
    if (!table) { table = 0 }
    let data = {
      table: table,
      size: size
    }
    return this.database.collection('Location').doc('aeMFrRDSm3HJvnb2pBrr').collection('Parties').add(data);
  }


  // getMenuCatagories() {
  //   this.database.collection('Location').doc('aeMFrRDSm3HJvnb2pBrr').collection('Menu').
  // }


}

export class Location {
  Menu: Observable<any>;
  Orders: Observable<any>;
  Parties: Observable<any>;
}