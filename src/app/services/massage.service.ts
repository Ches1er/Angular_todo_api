import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Category} from '../dto/category';
import {Note} from '../dto/note';

@Injectable({
  providedIn: 'root'
})
export class MassageService {
  private pChangeCategoryMessage: Subject<Category> = new Subject();
  private pAddCategoryMessage: Subject<null> = new Subject();
  private pUpdatedCategoryMessage: Subject<null> = new Subject();
  private pDelCategoryMessage: Subject<Category> = new Subject();
  private pAddNoteMessage: Subject<Category> = new Subject();
  private pUpdatedNotes: Subject<null> = new Subject();
  private pDelNoteMessage: Subject<Note> = new Subject();

  constructor() {
  }

  /*Getters*/

  /*Categories*/

  get changeCategoryMessage() {
    return this.pChangeCategoryMessage;
  }

  get addCategoryMessage() {
    return this.pAddCategoryMessage;
  }

  get updatedCategoryMessage() {
    return this.pUpdatedCategoryMessage;
  }

  get delCategoryMessage() {
    return this.pDelCategoryMessage;
  }

  /*Notes*/

  get addNoteMessage() {
    return this.pAddNoteMessage;
  }

  get updatedNoteMessage() {
    return this.pUpdatedNotes;
  }

  get delNoteMessage() {
    return this.pDelNoteMessage;
  }

      /* Subscribe methods*/

  /*Categories*/

  public changeCategory(category: Category) {
    this.pChangeCategoryMessage.next(category);
  }

  public addCategory() {
    this.pAddCategoryMessage.next(null);
  }

  public updatedCategory() {
    this.pUpdatedCategoryMessage.next(null);
  }

  public delCategory(category: Category) {
    this.pDelCategoryMessage.next(category);
  }

  /*Notes*/

  public addNote(category: Category) {
    this.pAddNoteMessage.next(category);
  }

  public updatedNotes() {
    this.pUpdatedNotes.next();
  }

  public delNote(note: Note) {
    this.pDelNoteMessage.next(note);
  }

}
