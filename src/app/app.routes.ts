import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { BlogAngularComponent } from './blog-angular/blog-angular.component';
import { BlogFlutterComponent } from './blog-flutter/blog-flutter.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'about',
    component: AboutComponent,
  },

  { path: 'login', component: LoginComponent },

  { path: 'signup', component: SignupComponent },
  { path: 'blog', component: BlogComponent, 

    children:[
      {
        
    path:'blog-angular', component:BlogAngularComponent,

    },
  
    {
      path:'blog-flutter', component:BlogFlutterComponent,
  
      },
  ]
  },
  { path: 'user/:id', component: UserComponent },
  { path: '**', component: PageNotFoundComponent },
];
