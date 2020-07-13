import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'menu',
        loadChildren:()=>
        import ('../pages/menu/menu.module').then(
          m=>m.MenuPageModule
        )
      },
      {
        path:'orders',
        loadChildren:()=>
        import ('../pages/orders/orders.module').then(
          m=>m.OrdersPageModule
        )
      },
      {
        path:'search',
        loadChildren:()=>
        import ('../pages/search/search.module').then(
          m=>m.SearchPageModule
        )
      },
      {
        path:'address',
        loadChildren:()=>
        import ('../pages/address/address.module').then(
          m=>m.AddressPageModule
        )
      },
      {
        path:'account',
        loadChildren:()=>
        import ('../pages/account/account.module').then(
          m=>m.AccountPageModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
