import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy-router.module';
import { PollingModule } from 'polling';



@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    PollingModule.forChild()
    // PollingModule.forChild({interval: 4000})
  ]
})
export class LazyModule { }
