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

  ngOnInit() {
  }

  public occurrenceList: OccurrenceProxy[] = [];

  public async ionViewDidEnter(): Promise<void> {
    this.getOccurrences();
  }

  public getOccurrences(): void {
    const list = this.occurrenceService.get();
    console.log(list);
    this.occurrenceList.push();
  }

}
