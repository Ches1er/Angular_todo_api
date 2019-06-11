import {Component, Inject, Input, OnInit} from '@angular/core';
import {Note} from '../../../dto/note';
import {MassageService} from '../../../services/massage.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  constructor(@Inject(MassageService) private msgService: MassageService) { }

  ngOnInit() {
  }

  delNote() {
    this.msgService.delNote(this.note);
  }
}
