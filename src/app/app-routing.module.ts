import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './component/customers/customers.component';
import { OrdersComponent } from './component/orders/orders.component';
import { LoginComponent } from './component/login/login.component';
import { EditComponent } from './component/edit/edit.component';
import { ListViewComponent } from './component/list-view/list-view.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
  { path: 'customer', component: CustomersComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'edit', component: EditComponent},
  { path: 'list', component: ListViewComponent},
  { path: '', component: CustomersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
