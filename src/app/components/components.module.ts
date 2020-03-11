import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { DescriptionroutesComponent } from './descriptionroutes/descriptionroutes.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DescriptionroutesComponent
  ],

  exports: [
    HeaderComponent,
    DescriptionroutesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
