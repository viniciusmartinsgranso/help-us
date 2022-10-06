import { Component, Input, OnInit } from '@angular/core';
import { OccurrenceTypeEnum, occurrenceTypeWhiteImage } from '../../models/enums/occurrence-type.enum';
import { mockedOccurrences } from '../../models/mocks/occurrence.mock';
import { OccurrenceProxy } from '../../models/proxies/occurrence.proxy';

@Component({
  selector: 'app-feed-occurrence',
  templateUrl: './feed-occurrence.component.html',
  styleUrls: ['./feed-occurrence.component.scss'],
})
export class FeedOccurrenceComponent implements OnInit {

  constructor() { }

  @Input()
  public occurrence: OccurrenceProxy;

  public occurrenceList: OccurrenceProxy[] = mockedOccurrences;

  public typeTranslate: Record<OccurrenceTypeEnum, string> = occurrenceTypeWhiteImage;

  ngOnInit() {}

}
