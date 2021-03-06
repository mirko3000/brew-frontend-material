import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrindComponent } from './grind/grind.component';

const routes: Routes = [
  {
    path: '',
    component: GrindComponent,
    data: { title: 'bm.menu.grind' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrindRoutingModule {}
