import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardWithForcedLogin } from './core/auth/auth-guard-with-forced-login.service';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        canActivate: [
          AuthGuardWithForcedLogin
        ],
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'login-callback', redirectTo: 'home' },
          { path: 'home', loadChildren: './dashboard/dashboard.module#DashboardModule' },
          { path: 'message-list', loadChildren: './pages/message-list/message-list.module#MessageListModule' },
          { path: 'provider', loadChildren: './pages/provider/provider.module#ProviderModule' },
          { path: 'channel', loadChildren: './pages/channel/channel.module#ChannelModule' },
          { path: 'currency', loadChildren: './pages/currency/currency.module#CurrencyModule' },
          { path: 'search_data_group', loadChildren: './pages/search_data_group/search_data_group.module#SearchDataGroupModule'},
          { path: 'rule-engine', children: [
            { path: 'rule-param', loadChildren: './pages/rule-engine/rule-param/rule-param.module#RuleParamModule' },
            { path: 'rule', loadChildren: './pages/rule-engine/rule/rule.module#RuleModule' }
          ]}
          /*{ path: 'promotions', loadChildren: './pages/promotions/promotions.module#PromotionsModule' },
          { path: 'configurations', loadChildren: './pages/configurations/configurations.module#ConfigurationsModule' },
          { path: 'staffs', loadChildren: './pages/staffs/staffs.module#StaffsModule' },
          { path: 'tariffs', loadChildren: './pages/tariffs/tariffs.module#TariffsModule' },
          { path: 'database-servers', loadChildren: './pages/database-servers/database-servers.module#DatabaseServersModule' },
          { path: 'campaigns', loadChildren: './pages/campaigns/campaigns.module#CampaignsModule' },
          { path: 'tenants', loadChildren: './pages/tenants/tenants.module#TenantsModule' },
          { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
          { path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule' },
          { path: 'error', loadChildren: './errors/errors.module#ErrorsModule' },*/
        ]
      },
    ]
  },

  { path: '**', redirectTo: '/error/404' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
