import { Component, OnInit } from '@angular/core';
import { IProduct } from '../productmodel';
import { ProductService } from '../productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router){  } 
  bookItem= {
     title:'',
     author:'',
     genre:'',
     description:'',
     imageUrl:''}
    //  productItem: IProduct;
  ngOnInit() {
  }
  AddBook()
  {    
    this.productService.newProduct(this.bookItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['books']);
  }
}
