import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  parties: any[] = [];
  constructor(private dataService: DataService) {

    dataService.getParties().subscribe( ref => this.parties = ref);
   }
  
   addParty() {
     this.dataService.addParty().then(ref => console.log(ref.id));
   }

  ngOnInit() {

  }
  myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  addParty(){
    console.log("in addParty Function");
  }
}

