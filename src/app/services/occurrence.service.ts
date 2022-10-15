import { Injectable } from '@angular/core';
import { OccurrenceTypeEnum } from '../models/enums/occurrence-type.enum';
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
      title: 'Ananindeua',
      location: 'Sorocaba',
      photoUrl: 'src/assets/images/vini.jpg',
      description: 'aaaaaaaaaa',
      type: OccurrenceTypeEnum.COOP,
    },
  ];

  public get(): any {
    const list = JSON.parse(localStorage.getItem('occurrences'));
    console.log(list);

    if (!list) {
      return localStorage.setItem('occurrences', JSON.stringify(this.occurrence));
    }
    return list;
  }

  public create(occurrence: NewOccurrencePayload): void {
    const storage = JSON.parse(localStorage.getItem('occurrences'));
    console.log(occurrence);
    console.log(storage);
    storage.push(occurrence);
    localStorage.setItem('occurrences', JSON.stringify(storage));
  }

  public update(occurrence: OccurrenceProxy): void {
    const storage = JSON.parse(localStorage.getItem('occurrences'));

    storage.push(occurrence[0]);
    localStorage.setItem('occurrences', JSON.stringify(storage));
  }

  public async delete(occurrence: number): Promise<void> {
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
