import { Tab3PageModule } from './tab3/tab3.module';
import { Tab1PageModule } from './tab1/tab1.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  //{ path: '', redirectTo: 'tabs', pathMatch: 'full' },
  
  /*{
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },*/


  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  //{ path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },


  /*
  { path: 'feed', loadChildren: './feed/feed.module#FeedPageModule' },*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
