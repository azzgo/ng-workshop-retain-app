import { FormsModule } from '@angular/forms';
import { NotesComponent } from './components/notes/notes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBarComponent } from './components/app-bar/app-bar.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NoteCreatorComponent } from './components/note-creator/note-creator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    AppBarComponent,
    NotesComponent,
    NoteCardComponent,
    NoteCreatorComponent,
  ],
  exports: [
    AppBarComponent,
    NotesComponent,
    NoteCardComponent,
    NoteCreatorComponent,
  ]
})
export class SharedModule { }
