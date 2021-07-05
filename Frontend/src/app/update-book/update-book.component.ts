import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../productservice.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookItem= {
    title:'',
    author:'',
    genre:'',
    description:'',
    imageUrl:''}
 
  constructor(private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("editBookId");
    this.productService.getBook(productId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.productService.editBook(this.bookItem);   
    alert("Success");
    this.router.navigate(['books']);
  }

}
