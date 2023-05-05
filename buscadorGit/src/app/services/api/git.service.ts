import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GitService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

  getUsers(page: number = 1, users: string) {
    let params = new HttpParams();

    params = params.append('q', users);
    params = params.append('page', page);

    const endpoint = `${this.apiUrl}/search/users`;

    return this.httpClient.get(endpoint, { params: params });
  }

  getUser(user: string) {
    const endpoint = `${this.apiUrl}/user/${user}`;

    return this.httpClient.get(endpoint);
  }
}
