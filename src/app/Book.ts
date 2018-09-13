export class Book {
  id: number;
  title: string;
  authors: Array<string>;
  publishedDate: string;
  constructor(id: number, title: string, authors: Array<string>, publishedDate: string) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.publishedDate = publishedDate;
  }
}
