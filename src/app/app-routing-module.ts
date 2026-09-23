import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductCatalogComponent } from './service-product-catalog/service-product-catalog';
import { GroupCustomerComponent } from './group-customer/group-customer';

const routes: Routes = [
  { path: '', redirectTo: 'group-customer', pathMatch: 'full' },
  { path: 'service-product-catalog', component: ServiceProductCatalogComponent },
  { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
  { path: 'learn-directive', component: ProductDropdownListComponent },
  { path: 'product-dropdown-list', component: ProductDropdownListComponent },
  { path: 'group-customer', component: GroupCustomerComponent },
  { path: 'product-list-call-service', component: ProductListCallServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }