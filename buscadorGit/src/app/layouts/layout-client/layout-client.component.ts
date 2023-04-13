import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/services/api/git.service';
import { SearchDataService } from 'src/app/services/tools/search-data.service';

@Component({
  selector: 'app-layout-client',
  templateUrl: './layout-client.component.html',
  styleUrls: ['./layout-client.component.scss'],
})
export class LayoutClientComponent implements OnInit {
  usersList: any;

  constructor(
    private apiGit: GitService,
    private searchData: SearchDataService
  ) {}

  ngOnInit(): void {
    this.getSearchData();
  }

  getSearchData() {
    this.searchData.searchData.subscribe((resp: any) => {
      if (resp) {
        this.getUsers(resp);
      }
    });
  }

  getUsers(data: any) {
    this.apiGit.getUsers(data).subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
