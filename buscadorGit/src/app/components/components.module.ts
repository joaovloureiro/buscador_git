import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { InfosModalComponent } from './infos-modal/infos-modal.component';
import { ButtonComponent } from './button/button.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    SearchComponent,
    CardComponent,
    InfosModalComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule,
    NgxSpinnerModule,
  ],
  exports: [
    MatSlideToggleModule,
    SearchComponent,
    ReactiveFormsModule,
    MatPaginatorModule,
    CardComponent,
    MatDialogModule,
    InfosModalComponent,
    ButtonComponent,
  ],
})
export class ComponentsModule {}
