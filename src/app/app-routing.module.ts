import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { AdminComponent } from '../app/admin/admin/admin.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'admin', pathMatch:'full'},
  {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'products', component:ProductListComponent, canActivate: [AuthGuard]},
  {path: 'libros/:id', component: ProductDetailComponent, canActivate: [AuthGuard]},
  {path:'admin', component: AdminComponent},
  {path:'**', component: NotfoundComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
