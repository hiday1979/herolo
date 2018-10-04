import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { GetBooksListService } from '../get-books-list.service';
import { Observable } from 'rxjs';
import { Book } from '../Book';

declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, AfterViewChecked {
  bookList = Array<Book>();
  id: number;
  bookName: string;
  fromNewBook = false;


  constructor(private data: GetBooksListService) { }

  async ngOnInit() {
    this.bookList = await this.data.getList();
    }

    ngAfterViewChecked() {

    }

    putDetailsInModel(id: number) {
      this.id = id;
      const title = <HTMLInputElement> document.getElementById('modelTitle');
      const author = <HTMLInputElement> document.getElementById('modelAuthor');
      const date = <HTMLInputElement> document.getElementById('modelPublishedDate');
      title.value = this.bookList[id].title;
      author.value = this.bookList[id].authors[0];
      date.value = this.bookList[id].publishedDate;
    }

    saveBook(fromNewBook: boolean) {
      const title = <HTMLInputElement> document.getElementById('modelTitle');
      const author = <HTMLInputElement> document.getElementById('modelAuthor');
      const date = <HTMLInputElement> document.getElementById('modelPublishedDate');
      const bookTitle = title.value.replace(/[^a-zA-Z0-9 ]/g, '');
      const bookAuthor = author.value.replace(/[^a-zA-Z0-9 ]/g, '');
      const bookDate = date.value.replace(/[^a-zA-Z0-9 ]/g, '');
      if (this.checkForBookTitle(bookTitle)) {
        document.getElementById('alertMassege').innerHTML = 'There can be only one....';
      } else if ( bookTitle !== '' && bookAuthor !== '' && bookDate !== '') {
        if (fromNewBook) {
          this.bookList.push(new Book(this.bookList.length + 1, bookTitle, [bookAuthor], bookDate));
          $('#squarespaceModal').modal('hide');
        } else {
      this.bookList[this.id].title = title.value;
      this.bookList[this.id].authors.length = 0;
      this.bookList[this.id].authors.push(author.value);
      this.bookList[this.id].publishedDate = date.value;
      title.value = '';
      author.value = '';
      date.value = '';
      $('#squarespaceModal').modal('hide');
        }
      } else {
        document.getElementById('alertMassege').innerHTML = 'One or more of the filds are empty';
      }
    }

    deleteBook() {
      for (let i = 0; i < this.bookList.length; i ++) {
            if ( this.bookList[i].title === this.bookName) {
              this.bookList.splice(i , 1);
            }
      }
    }

    putBookName(title: string, id: number) {
        this.bookName = title;
        this.id = id;
    }

    checkForBookTitle(title: string): boolean {
      let match = false;
      for (let i = 0; i < this.bookList.length; i ++) {
        if ( this.bookList[i].title.toLowerCase() === title.toLowerCase()) {
          match = true;
        }
     }
     return match;
    }
}
