import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteComponent } from './components/note-list/note/note.component';
import { AddCategoryComponent } from './components/windows/add-category/add-category.component';
import {FormsModule} from '@angular/forms';
import { DelCategoryComponent } from './components/windows/del-category/del-category.component';
import { AddNoteComponent } from './components/windows/add-note/add-note.component';
import { DelNoteComponent } from './components/windows/del-note/del-note.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CategoriesComponent,
    NoteListComponent,
    NoteComponent,
    AddCategoryComponent,
    DelCategoryComponent,
    AddNoteComponent,
    DelNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
