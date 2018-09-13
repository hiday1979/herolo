import { Injectable } from '@angular/core';
import { Book } from './Book';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class GetBooksListService {
  bookList = Array<Book>();
  url = 'https://www.googleapis.com/books/v1/volumes?q=a';
    constructor(private http: Http) {
     }

     async getList(): Promise<Book[]> {
       let i = 0;
      await this.http.get(this.url).pipe(map(res => res.json())).subscribe((res) => {
          res.items.forEach(element => {
            const title = element.volumeInfo.title.replace(/[^a-zA-Z0-9 ]/g, '');
            this.bookList.push(new Book(i, title, element.volumeInfo.authors, element.volumeInfo.publishedDate));
            i ++;
          });
      });
      return this.bookList;
     }



    }
