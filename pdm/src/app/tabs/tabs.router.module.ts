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
      /*{
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },*/
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
  {
    /*path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then(m => m.HomePageModule)
      }
    ]*/
     path: '', redirectTo: '/tabs/home', pathMatch: 'full' 
  },
{
/*  path: 'home',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then(m => m.HomePageModule)
      }
    ]*/
     path: '', redirectTo: '/tabs/home', pathMatch: 'full' 
  },
  {
    path: 'cadastro',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('../cadastro/cadastro.module').then(m => m.CadastroPageModule)
        }
      ]
    },
    {
      /*path: 'tab2',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('../tab2/tab2.module').then(m => m.Tab2PageModule)
        }
      ]*/
      
     path: 'tabs2', redirectTo: '/tabs/tabs2', pathMatch: 'full' 
      
    },
    
  { path: 'menu', loadChildren: '../menu/menu.module#MenuPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
