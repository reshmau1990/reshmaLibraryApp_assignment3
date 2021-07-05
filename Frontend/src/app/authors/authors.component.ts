import { Component } from '@angular/core';
import { AuthorService } from '../authorservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'pm-authors',
  templateUrl:'./authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  pageTitle: string = 'AUTHORS';
  imageWidth: number = 50;
  imageMargin: number = 2;

  authors=[{
    authorname:'',
    description:'',
    imageUrl:''}]
  

  constructor(private router:Router,private authorService: AuthorService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
  }
  getauthor(author:any)
  {
    localStorage.setItem("getAuthorId", author._id.toString());
    this.router.navigate(['author']);
  }
 
  editauthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['updateauthor']);

  }
  deleteauthor(author:any)
  {
    this.authorService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== author);
      })
  

  }
}
  