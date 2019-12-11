import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';
const routes = [
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
            { path: 'liked', loadChildren: () => import('./pages/liked/liked.module').then(m => m.LikedPageModule) },
        ]
    },
    {
        path: 'propertydetails',
        loadChildren: () => import('./pages/propertydetails/propertydetails.module').then(m => m.PropertydetailsPageModule)
    },
    {
        path: 'filter',
        loadChildren: () => import('./pages/filter/filter.module').then(m => m.FilterPageModule)
    },
    {
        path: 'details',
        loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule)
    },
    {
        path: 'images',
        loadChildren: () => import('./pages/images/images.module').then(m => m.ImagesPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map