import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesService } from './services/notes.service';
import { NotesComponent } from './components/notes/notes.component';
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
  ],
  providers: [
    NotesService,
  ]
})
export class SharedModule { }
