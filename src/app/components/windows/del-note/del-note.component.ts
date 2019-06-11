import {Component, Inject, OnInit} from '@angular/core';
import {Category} from '../../../dto/category';
import {MassageService} from '../../../services/massage.service';
import {NoteService} from '../../../services/note.service';
import {Note} from '../../../dto/note';

@Component({
  selector: 'app-del-note',
  templateUrl: './del-note.component.html',
  styleUrls: ['./del-note.component.css']
})
export class DelNoteComponent implements OnInit {

  note: Note = null;
  visible = false;

  constructor(@Inject(MassageService) private msgService: MassageService,
              @Inject(NoteService) private noteService: NoteService) {
  }

  ngOnInit() {
    this.msgService.delNoteMessage.subscribe(note => {
      this.visible = true;
      this.note = note;
    });

  }

  cancel() {
    this.visible = false;
    this.note = null;
  }

  clickOKDelNoteWin() {
    this.noteService.delNote(this.note).subscribe(resp => {
        this.msgService.updatedNotes();
      }
    );
    this.visible = false;
    alert('Category: ' + this.note.name + ' has been deleted');
    this.note = null;

  }


}
