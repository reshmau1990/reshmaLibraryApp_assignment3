import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { NewBookComponent } from './newbook/newbook.component';
import { ProductService } from './productservice.service';
import { AuthorService } from './authorservice.service';
import { NavbarService } from './navbarservice.service';
import { HeaderService } from './header.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { UpdateBookComponent } from './update-book/update-book.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorsComponent } from './authors/authors.component';
import { NewAuthorComponent } from './newauthor/newauthor.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NewBookComponent,
    LoginComponent,
    UpdateBookComponent,
    WelcomeComponent,
    SignUpComponent,
    AdminComponent,
    AuthorsComponent,
    NewAuthorComponent,
    UpdateAuthorComponent,
    BookComponent,
    AuthorComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [AuthService,AuthGuard,ProductService,AuthorService,NavbarService,HeaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
