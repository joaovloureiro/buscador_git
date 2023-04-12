import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, MatSlideToggleModule, ReactiveFormsModule],
  exports: [MatSlideToggleModule, SearchComponent, ReactiveFormsModule],
})
export class ComponentsModule {}
