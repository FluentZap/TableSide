import { Component, OnInit } from '@angular/core';
import { DataService, Location } from './../../services/data.service';
import { Router } from '@angular/router';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  parties: [] = [];
  constructor(private dataService: DataService) {
    // this.parties = dataService.
   }
  
   addParty() {
     this.dataService.addParty().then(ref => console.log(ref.id));
   }

  ngOnInit() {
    console.log();
  }

}

