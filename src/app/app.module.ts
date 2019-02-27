import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { FootComponent } from './foot/foot.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './producto/producto.component';
import { HeadComponent } from './head/head.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerGenericComponent } from './share/banner-generic/banner-generic.component';
import { HomeComponent } from './home/home.component';
import { NosotosPageComponent } from './nosotos-page/nosotos-page.component';
import { ProductosPageComponent } from './productos-page/productos-page.component';
import { CalidadPageComponent } from './calidad-page/calidad-page.component';
import { TecnologiaPageComponent } from './tecnologia-page/tecnologia-page.component';
import { ContactenosPageComponent } from './contactenos-page/contactenos-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    UbicacionComponent,
    FootComponent,
    NosotrosComponent,
    ProductosComponent,
    ProductoComponent,
    HeadComponent,
    BannerGenericComponent,
    HomeComponent,
    NosotosPageComponent,
    ProductosPageComponent,
    CalidadPageComponent,
    TecnologiaPageComponent,
    ContactenosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
