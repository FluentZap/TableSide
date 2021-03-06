import { Component } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TableSide';
  constructor (private dataservice: DataService) {
        dataservice.getMenuCatagories().subscribe( ref => {
    });
        dataservice.getMenuItems().subscribe( ref => {
    });

        dataservice.getMenuItems('Entree').subscribe( ref => {
    });
  }
}
