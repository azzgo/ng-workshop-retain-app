import { Component, OnInit } from '@angular/core';
import { NotesService, INote } from '../../services/notes.service';

@Component({
  selector: 'rt-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: INote[] = [];

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.fetchNotes();
  }

  fetchNotes() {
    this.notesService.getNotes().subscribe(notes => this.notes = notes);
  }

  checkCard(objectId) {
    const index = this.notes.findIndex(note => note.objectId === objectId);
    this.notesService.completeNote(objectId).subscribe(() => this.fetchNotes());
  }

  addNote(note: INote) {
    this.notesService.createNote(note).subscribe(({objectId}) => {
      this.notes.push({
        ...note,
        objectId
      });
    });
  }

}
