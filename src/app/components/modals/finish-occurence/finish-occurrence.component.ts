import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-finish-occurence',
  templateUrl: './finish-occurrence.component.html',
  styleUrls: ['./finish-occurrence.component.scss'],
})
export class FinishOccurrenceComponent implements OnInit {

  constructor(
    private readonly modalController: ModalController,
  ) { }

  ngOnInit() {}

  public async onClickExit(): Promise<void> {
    await this.modalController.dismiss();
  }

}
