import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FinishOccurrenceComponent } from '../../../components/modals/finish-occurence/finish-occurrence.component';
import { OccurrenceTypeEnum } from '../../../models/enums/occurrence-type.enum';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private readonly modalController: ModalController,
    private readonly router: Router,
  ) {}

  public occurrenceType: Record<OccurrenceTypeEnum, string>;

  public async redirectToType(type: string): Promise<void> {
    console.log(type);
    await this.router.navigate(['new-feed-occurrence/', type]);
  }

}
