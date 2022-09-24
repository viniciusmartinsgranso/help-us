import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FinishOccurrenceComponent } from '../../../components/modals/finish-occurence/finish-occurrence.component';
import { OccurrenceTypeEnum, occurrenceTypeTranslate } from '../../../models/enums/occurrence-type.enum';
import { NewOccurrencePayload } from '../../../models/payloads/new-occurrence.payload';
import { OccurrenceProxy } from '../../../models/proxies/occurrence.proxy';

@Component({
  selector: 'app-new-occurrence',
  templateUrl: './new-occurrence.page.html',
  styleUrls: ['./new-occurrence.page.scss'],
})
export class NewOccurrencePage implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly modalController: ModalController,
  ) {
    this.type = this.activatedRoute.snapshot.params.type;
    console.log(this.type);
  }

  public occurrence: NewOccurrencePayload = {
    title: '',
    description: '',
    location:'',
    iconUrl: '',
  };

  public type: Record<number, string> = {
    0: 'Batida',
    1: 'Incêndio',
    2: 'Desmoronamento',
  };

  public occurrenceList: OccurrenceProxy;


  ngOnInit() {
  }

  // public getBase64(event: any): void {
  //   const file = event.target.files;
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     this.feed-occurrence.iconUrl = reader.result.toString();
  //     console.log(this.feed-occurrence.iconUrl);
  //   };
  //   reader.onerror = error => {
  //     console.log('Error: ', error);
  //   };
  // }

  public async postNewOccurrence(): Promise<void> {
    console.log(this.occurrence);

    const modal = await this.modalController.create({
      mode: 'md',
      component: FinishOccurrenceComponent,
      cssClass: 'background-profile-modal'
    });

    await modal.present();
  }
}
