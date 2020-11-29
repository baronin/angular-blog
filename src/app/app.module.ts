import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { HeaderComponent } from './components/header/header.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './pages/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './pages/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';

const AppRoutes: Routes =[
  { path: '', component: MainComponent},
  { path: 'myPosts', component: PostsComponent},
  { path: '**', component: NotFoundComponent },
  // { path: '**', redirectTo: '/' },
  // { path: 'contact', redirectTo: '/about', pathMatch:'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    MainNavComponent,
    NotFoundComponent,
    AboutComponent,
    HomeComponent,
    NavComponent,
    MainComponent,
    PostsComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
