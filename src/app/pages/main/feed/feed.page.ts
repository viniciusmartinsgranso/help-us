import { Component, OnInit } from '@angular/core';
import { mockedOccurrences } from '../../../models/mocks/occurrence.mock';
import { OccurrenceProxy } from '../../../models/proxies/occurrence.proxy';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public occurrenceList: OccurrenceProxy[] = mockedOccurrences;

}
