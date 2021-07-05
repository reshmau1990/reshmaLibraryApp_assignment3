import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  pageTitle: string = 'BOOK';
  imageWidth: number = 50;
  imageMargin: number = 2;
  
  book= {
    title:'',
    author:'',
    genre:'',
    description:'',
    imageUrl:''}
  
  constructor(private router:Router,private productService: ProductService) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("getBookId");
    this.productService.getBook(productId).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }
}
