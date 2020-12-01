import { RouterModule, Routes } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import {LoginComponent} from './components/login/login.component';
import {ModuleWithProviders} from '@angular/core';
import {MainComponent} from './pages/main/main.component';
import {PostsComponent} from './pages/posts/posts.component';

export const AppRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'myPosts', component: PostsComponent },
];

export const ROUTING: ModuleWithProviders<any> = RouterModule.forRoot(AppRoutes);
