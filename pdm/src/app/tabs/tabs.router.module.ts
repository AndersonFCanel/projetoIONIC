import { Tab2PageModule } from './../tab2/tab2.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },

      {
        path: 'login',// redirectTo: 'login' 
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },
      {
        path: 'cadastro',  redirectTo: 'cadastro' 
        /*children: [
          {
            path: '',
            loadChildren: () =>
              import('../cadastro/cadastro.module').then(m => m.CadastroPageModule)
          }
        ]*/
      },
      {
      path: '',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('../home/home.module').then(m => m.HomePageModule)
        }
      ]
    },
  ]
  },  
 /* {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then(m => m.HomePageModule)
      }
    ]
  },*/
  {
    path: 'home',  redirectTo: 'tabs/home'
    /*children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then(m => m.HomePageModule)
      }
    ]*/
  },
  {
    path: 'tab2',  redirectTo: 'tabs/tab2'
    /*children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then(m => m.HomePageModule)
      }
    ]*/
  },
  {
    path: '', //redirectTo: 'login' 
    children: [
      {
        path: '',
        loadChildren: () =>
        //import('../home/home.module').then(m => m.HomePageModule)
        import('../login/login.module').then(m => m.LoginPageModule)
      }
    ]
  },
  {
    path: 'login',// redirectTo: 'login' 
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../login/login.module').then(m => m.LoginPageModule)
      }
    ]
  },
  {
    path: 'cadastro',  redirectTo: 'cadastro' 
    /*children: [
      {
        path: '',
        loadChildren: () =>
          import('../cadastro/cadastro.module').then(m => m.CadastroPageModule)
      }
    ]*/
  },
  { path: 'menu', loadChildren: '../menu/menu.module#MenuPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
