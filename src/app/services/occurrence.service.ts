import { Injectable } from '@angular/core';
import { OccurrenceProxy } from '../models/proxies/occurrence.proxy';

@Injectable({
  providedIn: 'root',
})
export class OccurrenceService {

  constructor() { }

  public get(): OccurrenceProxy[] {
    const occurrences = localStorage.getItem('occurrences');
    return occurrences ? JSON.parse(occurrences) : [];
  }

  public create(occurrence: OccurrenceProxy): void {
    const storageOccurrences: OccurrenceProxy[] = localStorage.getItem('occurrences') ? JSON.parse(localStorage.getItem('occurrences')) : [];

    const newOccurrence: OccurrenceProxy = {
      ...occurrence,
      id: storageOccurrences.length > 0 ? storageOccurrences[storageOccurrences.length - 1].id + 1 : 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    storageOccurrences.unshift(newOccurrence);
    localStorage.setItem('occurrences', JSON.stringify(storageOccurrences));
  }

  public update(occurrence: OccurrenceProxy): void {
    const storage = JSON.parse(localStorage.getItem('occurrences'));

    storage.push(occurrence[0]);
    localStorage.setItem('occurrences', JSON.stringify(storage));
  }

  public async delete(occurrence: number): Promise<void> {
    const storage = JSON.parse(localStorage.getItem('occurrences'));

    const newList = storage.filter(occurrenceStorage => {
      if (occurrenceStorage.id !== occurrence) {
        return occurrenceStorage;
      }
    });

    storage.push(newList);
    localStorage.setItem('occurrences', JSON.stringify(newList));
  }
}
