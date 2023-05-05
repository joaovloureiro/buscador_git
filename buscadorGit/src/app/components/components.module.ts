import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [SearchComponent, CardComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  exports: [
    MatSlideToggleModule,
    SearchComponent,
    ReactiveFormsModule,
    MatPaginatorModule,
    CardComponent,
  ],
})
export class ComponentsModule {}
