import { NgModule } from '@angular/core';
import { LazyComponent } from './lazy.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: LazyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule {}
