import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  constructor(private router: Router) {}

  private searchDataSource = new BehaviorSubject(null);
  searchData: any = this.searchDataSource.asObservable();
  setSearchData(text: any) {
    this.searchDataSource.next(text);

    if (text === '') {
      this.router.navigate(['/home']);
    } else if (this.router.url === '/home' && text !== '') {
      this.router.navigate(['/search']);
    }
  }
}
