import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SearchPageComponent } from 'src/app/pages/search-page/search-page.component';

@NgModule({
  declarations: [HomeComponent, LayoutComponent, SearchPageComponent],
  imports: [CommonModule, LayoutRoutingModule, ComponentsModule],
})
export class LayoutModule {}
