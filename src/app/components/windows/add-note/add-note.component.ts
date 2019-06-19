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
/*    if (this.name.length < 2 || this.name.length > 10) {
      alert('Note name must consist more than 1 and less than 10 characters');
      this.cancel();
    }
    if (this.desc.length > 20) {
      alert('Description must consist less than 20 characters');
      this.cancel();
    }*/
    this.noteService.addNote(this.category, this.name, this.desc)
      .subscribe(resp => this.msgService.updatedNotes());
    this.cancel();
  }

}
