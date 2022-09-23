import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OccurrenceTypeEnum, occurrenceTypeTranslatedRecord } from '../../../models/enums/occurrence-type.enum';
import { NewOccurrencePayload } from '../../../models/payloads/new-occurrence.payload';

@Component({
  selector: 'app-new-occurrence',
  templateUrl: './new-occurrence.page.html',
  styleUrls: ['./new-occurrence.page.scss'],
})
export class NewOccurrencePage implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
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

  public type: Record<OccurrenceTypeEnum, string> = occurrenceTypeTranslatedRecord;


  ngOnInit() {
  }

  // public getBase64(event: any): void {
  //   const file = event.target.files;
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     this.occurrence.iconUrl = reader.result.toString();
  //     console.log(this.occurrence.iconUrl);
  //   };
  //   reader.onerror = error => {
  //     console.log('Error: ', error);
  //   };
  // }
}
