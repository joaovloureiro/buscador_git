import { Component, OnInit } from '@angular/core';
import { UserProps } from 'src/app/types/user.type';

@Component({
  selector: 'app-layout-client',
  templateUrl: './layout-client.component.html',
  styleUrls: ['./layout-client.component.scss'],
})
export class LayoutClientComponent implements OnInit {
  usersList: UserProps[] = [];

  constructor() {}

  ngOnInit(): void {}
}
