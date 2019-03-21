import { Injectable } from '@angular/core';
import {Carte} from '../Carte';
import {Observable, of} from 'rxjs';

@Injectable()
export class CarteService {

  ELEMENT_DATA: Carte[] = [
    {position: 0,  numcarta: '4555666677778888' , prodotto: 'CLASSIC VISA', stato: 'AA'},
    {position: 1,  numcarta: '4555666677778889'  ,prodotto: 'CLASSIC VISA', stato: 'CT'},
    {position: 2,  numcarta: '4555666677778801' , prodotto: 'CLASSIC VISA', stato: 'AA'},
    {position: 3,  numcarta: '4555666677778802' , prodotto: 'CLASSIC VISA', stato: 'DD'},
    {position: 4,  numcarta: '4555666677778803' , prodotto: 'CLASSIC VISA', stato: 'AA'},
    {position: 5,  numcarta: '4555666677778803' , prodotto: 'CLASSIC VISA', stato: 'FP'},
    {position: 6,  numcarta: '4555666677778805' , prodotto: 'CLASSIC VISA', stato: 'AA'},

  ];

  categories = [
    {value: 'Web-Development', viewValue: 'Web Development'},
    {value: 'Android-Development', viewValue: 'Android Development'},
    {value: 'IOS-Development', viewValue: 'IOS Development'}
  ];

  constructor() {
  }

  getData(): Observable<Carte[]> {
    return of<Carte[]>(this.ELEMENT_DATA);
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
