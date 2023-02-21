import { ModuleWithProviders, NgModule } from '@angular/core';
import { PollingConfig, PollingService,INTERVAL } from './polling.service';
import { PollingComponent } from './polling.component';
// import { INTERVAL, PollingConfig } from 'polling';



@NgModule({
  declarations: [
    PollingComponent
  ],
  imports: [
  ],
  exports: [
    PollingComponent
  ],
  // providers: [PollingService]

})
export class PollingModule { 
  static forRoot(): ModuleWithProviders<PollingModule>{
    return {
      ngModule: PollingModule,
      providers: [PollingService]
    }
  }

  static forChild(config?: PollingConfig): ModuleWithProviders<PollingModule> {
    return {
      ngModule : PollingModule,
      providers: [PollingService, {
        provide: INTERVAL,
        useValue: config?.interval || 3000
      }]
    }
  }

}
