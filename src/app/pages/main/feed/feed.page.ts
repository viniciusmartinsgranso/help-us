import { Component, OnInit } from '@angular/core';
import { OccurrenceProxy } from '../../../models/proxies/occurrence.proxy';
import { OccurrenceService } from '../../../services/occurrence.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor(
    private readonly occurrenceService: OccurrenceService,
  ) { }

  public ngOnInit() {
    this.getOccurrences();
  }

  public ionViewDidEnter() {
    this.getOccurrences();
  }

  public occurrenceList: OccurrenceProxy[] = [];

  public getOccurrences(): void {
    this.occurrenceList = this.occurrenceService.get();
  }

}
