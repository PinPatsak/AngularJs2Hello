import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ExperienceComponent],
  exports:[ExperienceComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedModule
  ]
})
export class ExperienceModule { }
