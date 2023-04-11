import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutClientComponent } from './layouts/layout-client/layout-client.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutClientComponent,
    loadChildren: () =>
      import('./layouts/layout-client/layout-client.module').then(
        (m) => m.LayoutClientModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
