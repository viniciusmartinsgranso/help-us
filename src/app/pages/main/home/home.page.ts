import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FinishOccurrenceComponent } from '../../../components/modals/finish-occurence/finish-occurrence.component';
import { OccurrenceTypeEnum, occurrenceTypeIconRecord } from '../../../models/enums/occurrence-type.enum';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private readonly modalController: ModalController,
  ) {}

  public occurrenceType: Record<OccurrenceTypeEnum, string> = occurrenceTypeIconRecord;

  public async openModalCongrat(): Promise<void> {
    const modal = await this.modalController.create({
      mode: 'md',
      component: FinishOccurrenceComponent,
      cssClass: 'background-profile-modal'
    });

    await modal.present();
  }

}
