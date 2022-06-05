import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'accounts',
        loadChildren: () => import('../pages/accounts/accounts.module').then(m => m.AccountsPageModule)
      },
      {
        path: 'envelopes',
        loadChildren: () => import('../pages/envelopes/envelopes.module').then(m => m.EnvelopesPageModule)
      },
      {
        path: 'calculator',
        loadChildren: () => import('../pages/calculator/calculator.module').then(m => m.CalculatorPageModule)
      },
      {
        path: 'descriptions',
        loadChildren: () => import('../pages/descriptions/descriptions.module').then(m => m.DescriptionsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
