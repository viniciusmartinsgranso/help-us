import { Component, OnInit } from '@angular/core';
import { NewOccurrencePayload } from '../../../models/payloads/new-occurrence.payload';

@Component({
  selector: 'app-new-occurrence',
  templateUrl: './new-occurrence.page.html',
  styleUrls: ['./new-occurrence.page.scss'],
})
export class NewOccurrencePage implements OnInit {

  constructor() { }

  public occurrence: NewOccurrencePayload = {
    title: '',
    description: '',
    location:'',
    iconUrl: '',
  };

  ngOnInit() {
  }

  public getBase64(event: any): void {
    const file = event.target.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.occurrence.iconUrl = reader.result.toString();
      console.log(this.occurrence.iconUrl);
    };
    reader.onerror = error => {
      console.log('Error: ', error);
    };
  }
}
