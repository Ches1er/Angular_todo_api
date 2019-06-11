import {Component, Inject, OnInit} from '@angular/core';
import {MassageService} from '../../../services/massage.service';
import {NoteService} from '../../../services/note.service';
import {Category} from '../../../dto/category';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  name = '';
  desc = '';
  visible = false;
  category: Category = null;

  constructor(@Inject(MassageService) private msgService: MassageService,
              @Inject(NoteService) private noteService: NoteService) {
  }

  ngOnInit() {
    this.msgService.addNoteMessage.subscribe(category => {
      this.visible = true;
      this.category = category;
    });
  }

  cancel() {
    this.name = '';
    this.desc = '';
    this.visible = false;
  }

  clickOKAddNoteWin() {
    this.noteService.addNote(this.category, this.name, this.desc)
      .subscribe(resp => this.msgService.updatedNotes());
    this.cancel();
  }

}
