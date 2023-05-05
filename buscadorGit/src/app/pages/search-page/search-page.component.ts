import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  users!: CardProps[];
  total!: number;
  search!: string;
  unsubscribeQueryParams!: Subscription;

  constructor(
    private searchData: SearchDataService,
    private apiGit: GitService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getParams();
    this.getSearchData();
  }

  getParams() {
    this.unsubscribeQueryParams = this.activatedRoute.queryParams.subscribe(
      (params) => {
        if (params && params['q']) {
          this.searchData.setSearchData(params['q']);
          this.unsubscribeQueryParams.unsubscribe();
        }
      }
    );

    if (this.search) this.unsubscribeQueryParams.unsubscribe();
  }

  getSearchData() {
    this.searchData.searchData.subscribe((data: string) => {
      if (data) (this.search = data), this.getUsers();
      // else this.router.navigate(['/home']);
    });
  }

  getUsers(page: number = 1, data: string = this.search) {
    this.setParams(data);

    this.apiGit.getUsers(page, data).subscribe((resp: unknown) => {
      if (resp) {
        console.log(resp);

        this.total = (resp as { total_count: number })?.total_count;
        this.users = (resp as { items: UserProps[] })?.items.map((user) => {
          return {
            avatar: user.avatar_url,
            name: user?.login || 'Usuário',
            score: user?.score,
            url: user?.url,
          };
        });

        console.log(this.users);
      }
    });
  }

  setParams(data: string = this.search) {
    const urlTree = this.router.createUrlTree([], {
      relativeTo: this.activatedRoute,
      queryParams: { q: data },
      queryParamsHandling: 'merge',
    });

    this.location.go(urlTree.toString());
  }
}
