import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },

  {
    path: 'tabs',
    component: TabsPage, children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
      {path: 'liked',loadChildren: () => import('./pages/liked/liked.module').then(m => m.LikedPageModule)},
    ]
  },
  {
    path: 'propertydetails',
    loadChildren: () => import('./pages/propertydetails/propertydetails.module').then( m => m.PropertydetailsPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./pages/filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'images',
    loadChildren: () => import('./pages/images/images.module').then( m => m.ImagesPageModule)
  },
  {
    path: 'fullscreen',
    loadChildren: () => import('./pages/fullscreen/fullscreen.module').then( m => m.FullscreenPageModule)
  },
  {
    path: 'filteroutput',
    loadChildren: () => import('./pages/filteroutput/filteroutput.module').then( m => m.FilteroutputPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'featured',
    loadChildren: () => import('./pages/featured/featured.module').then( m => m.FeaturedPageModule)
  },
  {
    path: 'popover-more',
    loadChildren: () => import('./pages/popover-more/popover-more.module').then( m => m.PopoverMorePageModule)
  },  {
    path: 'filter-category',
    loadChildren: () => import('./pages/filter-category/filter-category.module').then( m => m.FilterCategoryPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },


 



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
