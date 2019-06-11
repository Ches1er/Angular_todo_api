import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiConfig} from './api-config';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Category} from '../dto/category';
import {Note} from '../dto/note';
import {NoteResponse} from '../dto/noteResponse';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private config: ApiConfig = new ApiConfig();

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  public notes(category: Category): Observable<Array<Note>> {
    const params: FormData = new FormData();
    params.set('id', category.id.toString());
    return this.http.post(this.config.getNotesUrl, params)
      .pipe(map(resp => NoteResponse.fromJson(resp)))
      .pipe(map(notesResponse => notesResponse.data));
  }

  public addNote(category: Category, name: string, desc: string): Observable<any> {
    const params = new FormData();
    params.append('id', category.id.toString());
    params.append('name', name);
    params.append('desc', desc);
    return this.http.post(this.config.addNoteUrl, params);
  }

  public delNote(note: Note) {
    const params = new FormData();
    params.append('id', note.id.toString());
    return this.http.post(this.config.delNoteUrl, params);
  }
}
