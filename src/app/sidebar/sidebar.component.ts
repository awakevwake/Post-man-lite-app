import { Component, OnInit } from '@angular/core';

interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  foods: Options[] = [
    {value: '0', viewValue: 'Steak'},
    {value: '1', viewValue: 'Pizza'},
    {value: '2', viewValue: 'Tacos'},
  ];

  places: Options[] = [
    {value: '0', viewValue: 'New York'},
    {value: '1', viewValue: 'Ohio'},
    {value: '2', viewValue: 'Texas'},
  ];

  sports: Options[] = [
    {value: '0', viewValue: 'Soccer'},
    {value: '1', viewValue: 'Rugby'},
    {value: '2', viewValue: 'Baseball'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
