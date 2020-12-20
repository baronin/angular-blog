import { RouterModule, Routes } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import {LoginComponent} from './components/login/login.component';
import {ModuleWithProviders} from '@angular/core';
import {MainComponent} from './pages/main/main.component';
import {PostsComponent} from './pages/posts/posts.component';
import {AboutComponent} from './pages/about/about.component';
import {AngularComponent} from './pages/angular/angular.component';
import {FormsComponent} from './pages/angular/forms/forms.component';

export const AppRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'myPosts', component: PostsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'angular/forms', component: FormsComponent },
];

export const ROUTING: ModuleWithProviders<any> = RouterModule.forRoot(AppRoutes);
