import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsesRoutingModule } from './uses-routing.module';
import { UsesComponent } from './uses.component';

@NgModule({
  declarations: [UsesComponent],
  imports: [CommonModule, UsesRoutingModule],
})
export class UsesModule {}
