import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutClientRoutingModule } from './layout-client-routing.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LayoutClientComponent } from './layout-client.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SearchPageComponent } from 'src/app/pages/search-page/search-page.component';

@NgModule({
  declarations: [HomeComponent, LayoutClientComponent, SearchPageComponent],
  imports: [CommonModule, LayoutClientRoutingModule, ComponentsModule],
})
export class LayoutClientModule {}
