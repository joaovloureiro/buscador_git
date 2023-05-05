import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfosModalComponent } from '../infos-modal/infos-modal.component';

export interface CardProps {
  avatar: string;
  name: string;
  score: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() user!: CardProps;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openModal(login: string) {
    this.dialog.open(InfosModalComponent, {
      data: login,
      panelClass: ['modal-panel-class'],
      minWidth: '60%',
    });
  }
}
