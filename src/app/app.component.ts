import { Component } from '@angular/core';

interface Options {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Post-man-lite-app';
  opened = false;


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

}
