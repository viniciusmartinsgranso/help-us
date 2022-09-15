import { Component } from '@angular/core';
import { OccurrenceTypeEnum, occurrenceTypeIconRecord } from '../../../models/enums/occurrence-type.enum';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public occurrenceType: Record<OccurrenceTypeEnum, string> = occurrenceTypeIconRecord;

}
