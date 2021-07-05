import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../authorservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  pageTitle: string = 'AUTHOR';
  imageWidth: number = 50;
  imageMargin: number = 2;

  author= {
    authorname:'',
    description:'',
    imageUrl:''}

  constructor(private router:Router,private authorService:AuthorService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editAuthorId");
    this.authorService.getAuthor(authorId).subscribe((data)=>{
      this.author=JSON.parse(JSON.stringify(data));
    })
  }

}
