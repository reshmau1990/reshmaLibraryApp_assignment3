import { Component } from '@angular/core';
import { ProductService } from '../productservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'pm-books',
  templateUrl:'./books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  pageTitle: string = 'BOOKS';
  imageWidth: number = 50;
  imageMargin: number = 2;

  books=[{
    title:'',
    author:'',
    genre:'',
    description:'',
    imageUrl:''}]
  

  constructor(private router:Router,private productService: ProductService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.productService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }
  
  getbook(book:any)
  {
    localStorage.setItem("getBookId", book._id.toString());
    this.router.navigate(['book']);
  }

 
  editbook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update']);

  }
  deletebook(book:any)
  {
    this.productService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      })
  

  }
}
  