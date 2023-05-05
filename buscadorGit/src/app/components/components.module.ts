import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { InfosModalComponent } from './infos-modal/infos-modal.component';

@NgModule({
  declarations: [SearchComponent, CardComponent, InfosModalComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  exports: [
    MatSlideToggleModule,
    SearchComponent,
    ReactiveFormsModule,
    MatPaginatorModule,
    CardComponent,
    MatDialogModule,
    InfosModalComponent,
  ],
})
export class ComponentsModule {}
