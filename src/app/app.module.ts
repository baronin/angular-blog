import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';

import { PostComponent } from './components/post/post.component';
import { HeaderComponent } from './components/header/header.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonComponent } from './components/button/button.component';

// directives
import { StyleDirective } from './directives/style.directive';
import { IfNotDirective } from './directives/if-not.directive';

// pipes
import { MultPipe } from './pipes/mult.pipe';
import { FilterPipe } from './pipes/filter.pipe';

// pages
import { AboutComponent } from './pages/about/about.component';
import { MainComponent } from './pages/main/main.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AngularComponent } from './pages/angular/angular.component';
import { FormsComponent } from './pages/angular/forms/forms.component';


// routing
// import {Routes, RouterModule} from '@angular/router';
import { ROUTING } from './app.routing';
import { WorkWithApiComponent } from './pages/angular/work-with-api/work-with-api.component';
import { WorkRxjsComponent } from './pages/angular/work-rxjs/work-rxjs.component';
import {NavPageComponent} from './components/nav-page/nav-page.component';

// const AppRoutes: Routes =[
//   { path: '', component: MainComponent},
//   { path: 'myPosts', component: PostsComponent},
//   { path: '**', component: NotFoundComponent },
//   // { path: '**', redirectTo: '/' },
//   // { path: 'contact', redirectTo: '/about', pathMatch:'full'},
// ];
@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    PostComponent,
    HeaderComponent,
    MainNavComponent,
    NotFoundComponent,
    AboutComponent,
    HomeComponent,
    MainComponent,
    PostsComponent,
    PostFormComponent,
    LoginComponent,
    ButtonComponent,
    AngularComponent,
    IfNotDirective,
    MultPipe,
    FilterPipe,
    FormsComponent,
    WorkWithApiComponent,
    WorkRxjsComponent,
    NavPageComponent,
  ],
  imports: [
    BrowserModule,
    ROUTING,
    // RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
