import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [
    FormsModule,
    Ng2SearchPipeModule,
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [ProductListComponent, ProductDetailComponent]
})
export class ProductsModule { }
