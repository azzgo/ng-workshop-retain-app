
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

export interface INote {
  objectId?: string;
  title: string;
  value: string;
}

@Injectable()
export class NotesService {
  apiUrl = `https://rih7yxe2.api.lncld.net/1.1/classes/Notes`;

  constructor(private http: HttpClient) {}

  getNotes() {
    return this.http.get<{results: INote[]}>(this.apiUrl).pipe(map((data) => data.results));
  }

  createNote(note: INote) {
    return this.http.post<{objectId: string}>(this.apiUrl, note);
  }

  completeNote(noteID) {
    return this.http.delete(`${this.apiUrl}/${noteID}`);
  }
}
