import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from './servers/server/server-resolver.service';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
    ]
  },
  {
    path: 'servers',
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: {
          server: ServerResolverService,
        },
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [
          CanDeactivateGuardService,
        ]
      },
    ]
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: {
      message: 'Page not found',
    },
  },
  // {
  //   path: 'not-found',
  //   component: PageNotFoundComponent,
  // },
  {
    path: '**',
    redirectTo: '/not-found',
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(appRoutes, {
    //   useHash: true,
    // }),
  ],
  exports: [
    RouterModule,
  ]
})

export class AppRoutingModule {

}
