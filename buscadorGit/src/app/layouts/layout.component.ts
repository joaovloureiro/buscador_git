import { Component, OnInit } from '@angular/core';
import { UserProps } from 'src/app/types/user.type';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  usersList: UserProps[] = [];

  constructor() {}

  ngOnInit(): void {}
}
