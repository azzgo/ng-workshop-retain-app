import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { isEmpty } from 'lodash';

@Component({
  selector: 'rt-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})
export class NoteCreatorComponent {
  isFocus = false;
  note = {
    title: '',
    value: ''
  };

  @Output() newNote = new EventEmitter();

  createNote() {
    const { title, value } = this.note;
    if (isEmpty(title) || isEmpty(value)) {
      return false;
    }

    this.newNote.next({title, value});
    return false;
  }

}
