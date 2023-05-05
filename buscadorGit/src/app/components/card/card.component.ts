import { Component, Input, OnInit } from '@angular/core';

export interface CardProps {
  avatar: string;
  name?: string;
  score: number;
  url: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() user!: CardProps;

  ngOnInit() {}
}
