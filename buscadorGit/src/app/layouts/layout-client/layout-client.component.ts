import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/services/api/git.service';

@Component({
  selector: 'app-layout-client',
  templateUrl: './layout-client.component.html',
  styleUrls: ['./layout-client.component.scss'],
})
export class LayoutClientComponent implements OnInit {
  constructor(private apiGit: GitService) {}

  ngOnInit(): void {}

  getSearchData(data: string) {}
}
