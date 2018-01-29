import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  note: Note;

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    this.note = new Note();
  }

  onSubmit() {
    this._noteService.createNote(this.note,
      (note) => {
        this.note = new Note();
      },
      (err) => {
        console.log(err);
      }
    );
    
  }

}
