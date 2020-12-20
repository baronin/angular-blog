import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { HeaderComponent } from './components/header/header.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './pages/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ROUTING } from './app.routing';
import { ButtonComponent } from './components/button/button.component';
import { StyleDirective } from './directives/style.directive';
import { AngularComponent } from './pages/angular/angular.component';
import { IfNotDirective } from './directives/if-not.directive';
import { MultPipe } from './pipes/mult.pipe';
import { FilterPipe } from './pipes/filter.pipe';

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
  ],
  imports: [
    BrowserModule,
    ROUTING,
    // RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
