import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { MatDialogModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
