import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NosotosPageComponent } from './nosotos-page/nosotos-page.component';
import { ProductosPageComponent } from './productos-page/productos-page.component';
import { CalidadPageComponent } from './calidad-page/calidad-page.component';
import { TecnologiaPageComponent } from './tecnologia-page/tecnologia-page.component';
import { ContactenosPageComponent } from './contactenos-page/contactenos-page.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotosPageComponent },
  { path: 'productos', component: ProductosPageComponent},
  { path: 'calidad-garantia', component: CalidadPageComponent},
  { path: 'tecnologia', component: TecnologiaPageComponent},
  { path: 'contactenos', component: ContactenosPageComponent},
  { path: 'producto/:id', component: ProductoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
