import { Component } from '@angular/core';

@Component({
  selector: 'rt-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notes = [
    {
      title: 'n',
      value: 'v'
    }, {
      title: 'n1',
      value: 'v1'
    }
  ];

  checkCard(note, i) {
    this.notes.splice(i, 1);
  }

  addNote(note) {
    this.notes.push(note);
  }

}
