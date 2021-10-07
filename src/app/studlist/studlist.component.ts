import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {S.No: 1, Studentname: 'Maha', Username: 'Maha', Password: 'ghjkk', Address: 'ghh',Contactno : '456789' , EmailID: 'fghj@fghj'},
  
];


@Component({
  selector: 'app-studlist',
  templateUrl: './studlist.component.html',
  styleUrls: ['./studlist.component.css']
})
export class StudlistComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  constructor() { }

  ngOnInit(): void {
  }

}
