import { NgModule } from '@angular/core';
import { NgtakiComponent } from './ngtaki.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    NgtakiComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    NgtakiComponent
  ]
})
export class NgtakiModule { }
