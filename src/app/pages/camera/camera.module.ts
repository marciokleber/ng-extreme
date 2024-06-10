import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from './camera.component';
import { DxButtonModule } from 'devextreme-angular';
import {CameraRoutingModule} from "./camera-routing.module";

@NgModule({
  declarations: [
    CameraComponent
  ],
  imports: [
    CommonModule,
    DxButtonModule,
    CameraRoutingModule
  ],
  exports:[CameraComponent ]
})
export class CameraModule { }
