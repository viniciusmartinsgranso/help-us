import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { OccurrenceTypeEnum } from '../../../models/enums/occurrence-type.enum';
import { mockedOccurrences } from '../../../models/mocks/occurrence.mock';
import { OccurrenceProxy } from '../../../models/proxies/occurrence.proxy';
import { UserProxy } from '../../../models/proxies/user.proxy';
import { OccurrenceService } from '../../../services/occurrence.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public occurrenceType: Record<OccurrenceTypeEnum, string>;

  public mockedOccurrences: OccurrenceProxy[] = mockedOccurrences;

  public occurrences: OccurrenceProxy[] = [];

  public user: UserProxy;

  constructor(
    private readonly router: Router,
    private readonly occurrenceService: OccurrenceService
  ) {}

  public async redirectToType(type: string): Promise<void> {
    await this.router.navigate(['new-feed-occurrence/', type]);
  }

  public ngOnInit(): void {
    this.getLoggedUser();
  }

  public ionViewDidEnter(): void {
    this.getMockedOccurrences();
  }

  public getMockedOccurrences(): void {
    const storageOccurrences = JSON.parse(localStorage.getItem('occurrences'));

    if (!storageOccurrences) {
      this.mockedOccurrences.forEach(occurrence => this.occurrenceService.create(occurrence));
    }
  }

  public getLoggedUser(): void {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
  }

}
