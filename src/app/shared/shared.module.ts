import { NotesComponent } from './components/notes/notes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBarComponent } from './components/app-bar/app-bar.component';
import { NoteCardComponent } from './components/note-card/note-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppBarComponent,
    NotesComponent,
    NoteCardComponent
  ],
  exports: [
    AppBarComponent,
    NotesComponent,
    NoteCardComponent
  ]
})
export class SharedModule { }
