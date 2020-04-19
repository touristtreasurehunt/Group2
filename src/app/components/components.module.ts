import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { DescriptionroutesComponent } from './descriptionroutes/descriptionroutes.component';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DescriptionroutesComponent,
    TabsComponent
  ],

  exports: [
    HeaderComponent,
    DescriptionroutesComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
