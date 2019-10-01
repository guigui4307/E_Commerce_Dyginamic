import { Component, OnInit } from '@angular/core';
import Article from'../Models/Article';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listArticle:Article[]=[
    new Article("article1","des1",5,20),
    new Article("article2","des2",4,40),
    new Article("article3","des3",3,60),
    new Article("article4","des4",2,80),
    new Article("article5","des5",1,100),
  ];
  constructor() { }

  ngOnInit() {
  }

}
