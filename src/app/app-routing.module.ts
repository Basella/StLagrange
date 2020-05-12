import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const appRoutes: Routes = [
  {
    path: 'signup',
    loadChildren: () =>
      import('../app/views//signup/signup.module').then((m) => m.SignupModule),
  },
  {
  path: 'login',
    loadChildren: () =>
      import('../app/views/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/views/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
