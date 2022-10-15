import { Injectable } from '@angular/core';
import { NewOccurrencePayload } from '../models/payloads/new-occurrence.payload';
import { OccurrenceProxy } from '../models/proxies/occurrence.proxy';

@Injectable({
  providedIn: 'root',
})
export class OccurrenceService {

  constructor() { }

  public occurrence: NewOccurrencePayload[] = [
    {
      id: 0,
      location: '',
      iconUrl: '',
      description: '',
      title: '',
      userId: 0,
    },
  ];

  public getOccurrences(list: OccurrenceProxy[]): void {
    list = JSON.parse(localStorage.getItem('occurrences'));

    if (!list) {
      localStorage.setItem('users', JSON.stringify(this.occurrence));
    }
  }

  public createOccurrence(occurrence: NewOccurrencePayload): void {
    const storage = JSON.parse(localStorage.getItem('occurrences'));
    storage.push(occurrence);
    localStorage.setItem('occurrences', JSON.stringify(storage));
  }

  public onUpdateOccurrence(occurrence: OccurrenceProxy): void {
    const storage = JSON.parse(localStorage.getItem('occurrences'));

    storage.push(occurrence[0]);
    localStorage.setItem('occurrences', JSON.stringify(storage));
  }

  public async onDeleteOccurrence(occurrence: number): Promise<void> {
    const storage = JSON.parse(localStorage.getItem('occurrences'));
    console.log(storage);

    const newList = storage.filter(occurrenceStorage => {
      if (occurrenceStorage.id !== occurrence) {
        return occurrenceStorage;
      }
    });

    storage.push(newList);
    localStorage.setItem('occurrences', JSON.stringify(newList));
  }
}
