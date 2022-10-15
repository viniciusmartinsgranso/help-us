import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FinishOccurrenceComponent } from '../../../components/modals/finish-occurence/finish-occurrence.component';
import { OccurrenceTypeEnum, occurrenceTypeTranslate } from '../../../models/enums/occurrence-type.enum';
import { mockedOccurrences } from '../../../models/mocks/occurrence.mock';
import { NewOccurrencePayload } from '../../../models/payloads/new-occurrence.payload';
import { OccurrenceProxy } from '../../../models/proxies/occurrence.proxy';
import { OccurrenceService } from '../../../services/occurrence.service';

@Component({
  selector: 'app-new-occurrence',
  templateUrl: './new-occurrence.page.html',
  styleUrls: ['./new-occurrence.page.scss'],
})
export class NewOccurrencePage implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly modalController: ModalController,
    private readonly occurrenceService: OccurrenceService,
  ) {
    this.type = this.activatedRoute.snapshot.params.type;
    console.log(this.type);
  }

  public type: OccurrenceTypeEnum = OccurrenceTypeEnum.CRASH;

  public occurrence: OccurrenceProxy = {
    id: 4,
    title: '',
    description: '',
    location: '',
    photoUrl: '',
    type: this.type,
  };

  public typeTranslate: Record<OccurrenceTypeEnum, string> = occurrenceTypeTranslate;

  public occurrenceList: OccurrenceProxy[] = mockedOccurrences;

  ngOnInit() {
  }

  public getBase64(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.occurrence.photoUrl = reader.result.toString();
      console.log(this.occurrence.photoUrl);
    };
    reader.onerror = error => {
      console.log('Error: ', error);
    };
  }

  public async postNewOccurrence(): Promise<void> {
    console.log(this.occurrenceList);
    console.log(this.occurrence);

    this.occurrenceService.createOccurrence(this.occurrence);

    // this.occurrenceList.push(this.occurrence);

    const modal = await this.modalController.create({
      mode: 'md',
      component: FinishOccurrenceComponent,
      cssClass: 'background-profile-modal',
    });

    await modal.present();
  }

  public canPost(): boolean {
    if (this.occurrence.title.length < 5)
      return false;

    if (this.occurrence.description.length < 5)
      return false;

    if (this.occurrence.location.length < 5)
      return false;

    return true;
  }

}
