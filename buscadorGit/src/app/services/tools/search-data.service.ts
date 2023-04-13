import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  constructor() {}

  private searchDataSource = new BehaviorSubject(null);
  SearchDataService: any = this.searchDataSource.asObservable();
  setSearchData(text: any) {
    this.searchDataSource.next(text);
  }
}
