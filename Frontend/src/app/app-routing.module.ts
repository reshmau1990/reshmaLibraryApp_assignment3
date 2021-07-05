import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component'
import { AuthorsComponent } from './authors/authors.component';
import { AdminComponent } from './admin/admin.component'
import { NewBookComponent } from './newbook/newbook.component';
import { NewAuthorComponent } from './newauthor/newauthor.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path:'add', 
  canActivate: [AuthGuard],
  component: NewBookComponent,
  },
{path:'addauthor', 
  canActivate: [AuthGuard],
  component: NewAuthorComponent,
},
{
  path:'update',
  canActivate: [AuthGuard],
  component:UpdateBookComponent
},
{
  path:'book',
  component:BookComponent
},
{
  path:'author',
  component: AuthorComponent
},
{
  path:'updateauthor',
  canActivate: [AuthGuard],
  component:UpdateAuthorComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
