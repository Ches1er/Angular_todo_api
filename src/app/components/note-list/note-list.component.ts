import {Component, Inject, OnInit} from '@angular/core';
import {MassageService} from '../../services/massage.service';
import {Category} from '../../dto/category';
import {NoteService} from '../../services/note.service';
import {Note} from '../../dto/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  category: Category = null;
  notes: Array<Note> = [];

  constructor(@Inject(MassageService) private messageService: MassageService,
              @Inject(NoteService) private noteService: NoteService) {
  }

  ngOnInit() {
    this.messageService.changeCategoryMessage.subscribe(category => {
      this.category = category;
      this.notes = [];
      this.updateNoteList();
    });
    this.messageService.updatedNoteMessage.subscribe(resp => this.updateNoteList()
  );
  }

  updateNoteList() {
    this.noteService.notes(this.category).subscribe(notes => {
      this.notes = notes;
    });
  }

  public addNote() {
    this.messageService.addNote(this.category);
  }

}
