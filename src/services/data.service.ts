import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

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

  getParties() {
    return this.database.collection('Location').doc('aeMFrRDSm3HJvnb2pBrr').collection('Parties').valueChanges();
  }

  getMenuCatagories() {
    return this.database.collection('Location').doc('aeMFrRDSm3HJvnb2pBrr').collection('MenuCategories').doc('Categories').valueChanges();
  }

  getMenuItems(): Observable<any>
  getMenuItems(categories: string): Observable<any>
  getMenuItems(categories?: string) : Observable<any> {    
    if (!categories || categories === "All") {
      return this.database.collection('Location').doc('aeMFrRDSm3HJvnb2pBrr').collection('Menu').valueChanges();
      
    } else {
      return this.database.collection('Location').doc('aeMFrRDSm3HJvnb2pBrr')
      .collection('Menu', ref => ref.where('category', '==', categories)).valueChanges()      
    }
  }

  addOrder(partyId: string) {
    let data = {
      partyId: partyId
    }
    this.database.collection('Location').doc('aeMFrRDSm3HJvnb2pBrr').collection('Orders').add(data);
  }

  addOrderItem(OrderId: string, Item: {}) {
    this.database.collection('Location').doc('aeMFrRDSm3HJvnb2pBrr').collection('Orders')
    .doc(OrderId).collection('Items').add(Item);
  }

}

export class Location {
  Menu: Observable<any>;
  Orders: Observable<any>;
  Parties: Observable<any>;
}