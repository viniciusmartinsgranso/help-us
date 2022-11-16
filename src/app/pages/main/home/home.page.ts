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

  constructor(
    private readonly modalController: ModalController,
    private readonly router: Router,
    private readonly occurrenceService: OccurrenceService
  ) {}

  public occurrenceType: Record<OccurrenceTypeEnum, string>;

  public mockedOccurrences: OccurrenceProxy[] = mockedOccurrences;

  public user: UserProxy;

  public async redirectToType(type: string): Promise<void> {
    await this.router.navigate(['new-feed-occurrence/', type]);
  }

  public ngOnInit(): void {
    this.getMockedOccurrences();
    this.getLoggedUser();
  }

  public getMockedOccurrences(): void {
    const storageOccurrences = localStorage.getItem('occurrences') ? JSON.parse(localStorage.getItem('occurrences')) : [];
    if (storageOccurrences.lenght === 0) {
      return void this.occurrenceService.create(this.mockedOccurrences[0]);
    }

    if (!storageOccurrences.lenght) {
      return void this.occurrenceService.create(this.mockedOccurrences[0]);
    }
  }

  public getLoggedUser(): void {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
  }

}
