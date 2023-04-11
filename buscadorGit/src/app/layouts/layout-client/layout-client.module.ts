import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutClientRoutingModule } from './layout-client-routing.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LayoutClientComponent } from './layout-client.component';

@NgModule({
  declarations: [HomeComponent, LayoutClientComponent],
  imports: [CommonModule, LayoutClientRoutingModule],
})
export class LayoutClientModule {}
