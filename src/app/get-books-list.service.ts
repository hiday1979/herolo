import { Injectable } from '@angular/core';
import { Book } from './Book';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class GetBooksListService {
  bookList = Array<Book>();
  url = 'https://www.googleapis.com/books/v1/volumes?q=a';
    constructor(private http: HttpClient) {
     }

     getList() {
       let i = 0;
        this.http.get(this.url).subscribe(res => {
          res.items.forEach(element => {
            const title = element.volumeInfo.title.replace(/[^a-zA-Z0-9 ]/g, '');
            this.bookList.push(new Book(i, title, element.volumeInfo.authors, element.volumeInfo.publishedDate));
            i ++;
          });
      });
      return this.bookList;
     }



    }
