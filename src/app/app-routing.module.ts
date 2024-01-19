import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './2.Bestemmiometro/data-table/data-table.component';
import { BestemmiatoreComponent } from './2.Bestemmiometro/bestemmiatore/bestemmiatore.component';

const routes: Routes = [
  {
    path:"counter", component:DataTableComponent
  },
  {
    path:"user", component:BestemmiatoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
