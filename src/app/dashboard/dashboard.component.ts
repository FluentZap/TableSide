import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories: {} = {};
  constructor(database: DataService) { 
    database.getMenuCatagories().subscribe(ref => {
      this.categories = ref;      
    })
  }  
  ngOnInit() {
  }

  // let sidebar = document.querySelector('.sidebar');
  // let sidebarToggle = document.querySelector('.sidebar-toggle');
  // let toggleSidebar = 


}


// var sidebar = document.querySelector(".sidebar");
// var sidebarToggle = document.querySelector(".sidebar-toggle");

// var toggleSidebar = function() {
//   if (sidebar.className === "sidebar open") {
//     sidebar.className = "sidebar";
//   }
//   else {
//     sidebar.className = "sidebar open";
//   }
// }