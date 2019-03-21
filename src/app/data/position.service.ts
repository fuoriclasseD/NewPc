import { Injectable } from '@angular/core';
import {Position} from '../Position';
import {Observable, of} from 'rxjs';

@Injectable()
export class PositionService {

  ELEMENT_DATA: Position[] = [
    {position: 0 , codposition: '100002323',  stato: 'AA' , dataemis: new Date(), prodotto: 'Visa Classic'},
    {position: 1 , codposition: '100067823',  stato: 'AA' , dataemis: new Date(), prodotto: 'Mastercard Gold'},
    {position: 2 , codposition: '100078904',  stato: 'AA' , dataemis: new Date(), prodotto: 'Amex Blue'},


  ];

  categories = [
    {value: 'Web-Development', viewValue: 'Web Development'},
    {value: 'Android-Development', viewValue: 'Android Development'},
    {value: 'IOS-Development', viewValue: 'IOS Development'}
  ];

  constructor() {
  }

  getData(): Observable<Position[]> {
    return of<Position[]>(this.ELEMENT_DATA);
  }

  getCategories() {
    return this.categories;
  }

  addPost(data) {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}
