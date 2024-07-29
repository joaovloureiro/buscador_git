import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { CardProps } from 'src/app/components/card/card.component';
import { GitService } from 'src/app/services/api/git.service';
import { SearchDataService } from 'src/app/services/tools/search-data.service';
import { UserProps } from 'src/app/types/user.type';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  usersList!: CardProps[];
  total!: number;
  search!: string;
  pageIndex: number = 0;
  unsubscribeQueryParams!: Subscription;

  constructor(
    private searchData: SearchDataService,
    private apiGit: GitService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private spinner: NgxSpinnerService,
  ) {}

  ngOnInit(): void {
    this.getParams();
    this.getSearchData();
  }

  getParams() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params && params?.['page']) {
        this.pageIndex = params?.['page'];
      }
      if (params && params?.['q']) {
        this.searchData.setSearchData(params?.['q']);
      }
    });
  }

  getSearchData() {
    this.searchData.searchData.subscribe((data: string) => {
      if (data) (this.search = data), this.getUsers();
      else this.router.navigate(['/home']);
    });
  }

  getUsers(page: number = this.pageIndex, data: string = this.search) {
    this.spinner.show();
    this.setParams({ q: data, page: page });

    this.apiGit.getUsers(page, data).subscribe((resp: unknown) => {
      if (resp) {
        this.total = (resp as { total_count: number })?.total_count;
        this.usersList = (resp as { items: UserProps[] })?.items.map((user) => {
          return {
            avatar: user.avatar_url,
            name: user?.login || 'Usuário',
            score: user?.score,
          };
        });
      }
      this.spinner.hide();
    });
  }

  setParams(data = {}) {
    const urlTree = this.router.createUrlTree([], {
      relativeTo: this.activatedRoute,
      queryParams: data,
      queryParamsHandling: 'merge',
    });

    this.location.go(urlTree.toString());
  }
}
