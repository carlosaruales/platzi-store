import { NgModule } from '@angular/core';
import { BannerComponent } from './componentes/banner/banner.component';
import { HomeComponent } from './componentes/home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule
  ]
})

export class HomeModule {

}
